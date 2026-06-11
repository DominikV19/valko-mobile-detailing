"""Download all media (photos + videos) from the Brightdata scrape into assets/."""
import json
import os
import urllib.parse
import urllib.request
from pathlib import Path

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"
)

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"


def download(url: str, dest: Path) -> None:
    if dest.exists() and dest.stat().st_size > 0:
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp, open(dest, "wb") as f:
        f.write(resp.read())
    print(f"  -> {dest.relative_to(ROOT)} ({dest.stat().st_size:,} bytes)")


def ext_from_url(url: str, default: str) -> str:
    path = urllib.parse.urlparse(url).path
    suffix = os.path.splitext(path)[1].lower()
    return suffix if suffix in {".jpg", ".jpeg", ".png", ".mp4", ".webp"} else default


def main() -> None:
    posts = json.loads((ASSETS / "raw" / "posts.json").read_text())
    profile = json.loads((ASSETS / "raw" / "profile.json").read_text())[0]

    # Profile picture
    pic_url = profile.get("profile_image_link")
    if pic_url:
        print(f"Profile picture: {profile['account']}")
        download(pic_url, ASSETS / "profile" / f"profile{ext_from_url(pic_url, '.jpg')}")

    for post in posts:
        shortcode = post["shortcode"]
        post_dir = ASSETS / "posts" / shortcode
        print(f"\nPost {shortcode} ({post.get('content_type')}):")
        photos = post.get("photos") or []
        videos = post.get("videos") or []
        for i, url in enumerate(photos, 1):
            if not url:
                continue
            download(url, post_dir / f"photo_{i:02d}{ext_from_url(url, '.jpg')}")
        for i, url in enumerate(videos, 1):
            if not url:
                continue
            download(url, post_dir / f"video_{i:02d}{ext_from_url(url, '.mp4')}")


if __name__ == "__main__":
    main()
