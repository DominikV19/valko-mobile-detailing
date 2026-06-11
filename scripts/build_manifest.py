"""Build assets/posts.json from raw Brightdata scrape + manual vision analysis.

The vision analysis (kind, subject, before/after pairing, suggested website usage)
was done by reading each image once and is encoded inline in IMAGE_NOTES below.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"


# Manual vision-analysis notes per (shortcode, filename) -> dict.
# Only the cover photo is present for Reels (Instagram serves a still thumbnail).
IMAGE_NOTES = {
    # ---- DYldGi6NjNj: announcement/pricing graphic ----
    ("DYldGi6NjNj", "photo_01.jpg"): {
        "kind": "brand_graphic",
        "subject": "pricing card",
        "description": (
            "Designed pricing card. Dark background, blue accents. White car-with-sparkles "
            "icon. Black BMW sedan on right. Lists services + starting prices and "
            "'Why choose us' bullets. Already on-brand."
        ),
        "suggested_use": "pricing_section_source_of_truth, fallback_pricing_graphic",
    },

    # ---- DX8L8K0Na5N: Reel - white car pressure-washing process ----
    ("DX8L8K0Na5N", "photo_01.jpg"): {
        "kind": "video_thumbnail",
        "subject": "exterior wash in progress",
        "description": (
            "First-person view of pressure washer hose and extension cords on a "
            "driveway. White car front with Ontario plate BRJC 238 visible at top. "
            "Conveys real on-site work."
        ),
        "suggested_use": "process_section_video, behind_the_scenes",
    },

    # ---- DXahs3IjdYp: Reel - BMW brown leather interior, 'Detail time' overlay ----
    ("DXahs3IjdYp", "photo_01.jpg"): {
        "kind": "video_thumbnail",
        "subject": "interior detail - BMW",
        "description": (
            "BMW steering wheel and rich brown perforated leather seats. House #40 "
            "and a Canadian flag visible through windshield. 'Detail time' text "
            "overlay. Premium-looking interior shot."
        ),
        "suggested_use": "interior_service_card, gallery",
    },

    # ---- DQndxkrDE2E: Reel - grey Hyundai Santa Fe exterior ----
    ("DQndxkrDE2E", "photo_01.jpg"): {
        "kind": "video_thumbnail",
        "subject": "exterior detail - Hyundai Santa Fe",
        "description": (
            "Three-quarter front view of a clean dark-grey Hyundai Santa Fe SUV. "
            "Suburban street. Crisp wheels and gloss paint."
        ),
        "suggested_use": "exterior_service_card, gallery",
    },

    # ---- DL-vuXpR_dd: Reel - blue BMW sedan, rear door open, tan interior ----
    ("DL-vuXpR_dd", "photo_01.jpg"): {
        "kind": "video_thumbnail",
        "subject": "exterior + interior detail - BMW sedan",
        "description": (
            "Bright blue BMW sedan in a driveway with rear door open showing "
            "tan/cream leather interior. Fall foliage. Strong gloss, dark grey "
            "wheels. Could anchor a 'full detail' visual."
        ),
        "suggested_use": "full_detail_service_card, hero_candidate, gallery",
    },

    # ---- DL0QV0WRpcV: Reel - Audi Q3 dirty floor mat ----
    ("DL0QV0WRpcV", "photo_01.jpg"): {
        "kind": "video_thumbnail",
        "subject": "interior - dirty floor mat (Audi Q3)",
        "description": (
            "Driver footwell of an Audi Q3 showing a heavily soiled rubber 'Q3' "
            "floor mat with caked dirt. Black leather seat and dashboard visible. "
            "Strong 'before' shot."
        ),
        "suggested_use": "stain_removal_card, problem_imagery",
    },

    # ---- DL0SZ-cRF1m: Carousel - 10 photos, white Ford F-150 work truck job ----
    ("DL0SZ-cRF1m", "photo_01.jpg"): {
        "kind": "before",
        "subject": "front cabin (driver side) - Ford F-150",
        "pair_id": "f150_front_cabin",
        "description": (
            "Driver-side door of white Ford F-150 open. Dirty cloth seats and "
            "debris on the rocker/sill. Trees in background."
        ),
        "suggested_use": "before_after_slider_A_before",
    },
    ("DL0SZ-cRF1m", "photo_02.jpg"): {
        "kind": "before",
        "subject": "floor mats removed on grass",
        "pair_id": "f150_floor_mats",
        "description": (
            "Two heavily soiled rubber WeatherTech-style floor mats lying on "
            "grass beside a crate of cleaning supplies. Shows extraction step."
        ),
        "suggested_use": "before_after_slider_B_before, process_section",
    },
    ("DL0SZ-cRF1m", "photo_03.jpg"): {
        "kind": "after",
        "subject": "front cabin (driver side) - Ford F-150",
        "pair_id": "f150_front_cabin",
        "description": (
            "Same Ford F-150 driver-side door open, now clean: vacuumed seats, "
            "polished dash, sill wiped down. Matches photo_01."
        ),
        "suggested_use": "before_after_slider_A_after",
    },
    ("DL0SZ-cRF1m", "photo_04.jpg"): {
        "kind": "after",
        "subject": "driver footwell with clean mat installed",
        "pair_id": "f150_floor_mats",
        "description": (
            "Driver footwell with clean black rubber all-weather mat installed. "
            "Pairs with photo_02."
        ),
        "suggested_use": "before_after_slider_B_after",
    },
    ("DL0SZ-cRF1m", "photo_05.jpg"): {
        "kind": "before",
        "subject": "rear cabin floor",
        "pair_id": "f150_rear_cabin",
        "description": (
            "Rear cabin of F-150: dirty carpet, debris, removed floor mat on "
            "the right. Rear bench folded up."
        ),
        "suggested_use": "before_after_slider_C_before",
    },
    ("DL0SZ-cRF1m", "photo_06.jpg"): {
        "kind": "after",
        "subject": "rear cabin floor",
        "pair_id": "f150_rear_cabin",
        "description": (
            "Same rear cabin angle, vacuumed and shampooed. Carpet floor mats "
            "reinstalled. Matches photo_05."
        ),
        "suggested_use": "before_after_slider_C_after",
    },
    ("DL0SZ-cRF1m", "photo_07.jpg"): {
        "kind": "after_alt_angle",
        "subject": "rear cabin from passenger side",
        "description": (
            "Alternate angle of the cleaned rear cabin from the passenger side. "
            "Folded rear bench, clean mats, no debris."
        ),
        "suggested_use": "gallery, secondary_after",
    },
    ("DL0SZ-cRF1m", "photo_08.jpg"): {
        "kind": "hero_exterior",
        "subject": "front three-quarter exterior - Ford F-150 XLT",
        "description": (
            "Three-quarter front shot of the finished white Ford F-150 XLT. "
            "Clean paint, gloss tires, blue sky. Hero-quality."
        ),
        "suggested_use": "hero_candidate, exterior_service_card, gallery",
    },
    ("DL0SZ-cRF1m", "photo_09.jpg"): {
        "kind": "hero_exterior",
        "subject": "driver side - Ford F-150 with ladder rack/canopy",
        "description": (
            "Full driver-side profile of the F-150 work truck with LEER canopy "
            "and aluminum ladder rack. Showcases capability with utility trucks."
        ),
        "suggested_use": "work_truck_specialty_card, gallery",
    },
    ("DL0SZ-cRF1m", "photo_10.jpg"): {
        "kind": "hero_exterior",
        "subject": "rear three-quarter - Ford F-150 4x4",
        "description": (
            "Rear three-quarter of the finished F-150 4x4 with LEER canopy. "
            "Clean glass and tail lights. Wide sky background."
        ),
        "suggested_use": "gallery, secondary_hero",
    },
}


def build() -> dict:
    posts_raw = json.loads((ASSETS / "raw" / "posts.json").read_text())
    profile_raw = json.loads((ASSETS / "raw" / "profile.json").read_text())[0]

    posts = []
    for p in posts_raw:
        shortcode = p["shortcode"]
        post_dir = ASSETS / "posts" / shortcode
        media = []
        for file in sorted(post_dir.iterdir()):
            entry = {
                "file": str(file.relative_to(ROOT)),
                "filename": file.name,
                "type": "video" if file.suffix == ".mp4" else "image",
            }
            note = IMAGE_NOTES.get((shortcode, file.name))
            if note:
                entry.update(note)
            media.append(entry)

        posts.append({
            "shortcode": shortcode,
            "instagram_url": p["url"],
            "content_type": p.get("content_type"),
            "product_type": p.get("product_type"),
            "date_posted": p.get("date_posted"),
            "likes": p.get("likes"),
            "num_comments": p.get("num_comments"),
            "caption": p.get("description"),
            "location": p.get("location"),
            "media": media,
        })

    # Pricing & services derived from the on-brand graphic in DYldGi6NjNj
    services = [
        {
            "name": "Exterior Wash",
            "starting_price_cad": 50,
            "blurb": "Hand wash, rinse and dry. Wheels and tires included.",
        },
        {
            "name": "Interior Detail",
            "starting_price_cad": 90,
            "blurb": "Full vacuum, surface wipe-down, glass, floor mats.",
        },
        {
            "name": "Full Detail (Interior + Exterior)",
            "starting_price_cad": 140,
            "blurb": "Combined exterior wash and interior detail.",
        },
        {
            "name": "Premium Detail",
            "starting_price_cad": 180,
            "blurb": "Deep interior + exterior with extras like wax and stain treatment.",
        },
    ]
    add_ons = [
        "Pet Hair & Stain Removal",
        "Wax & Exterior Protection",
    ]
    why_choose_us = [
        "Student-owned",
        "Premium products",
        "Affordable + quality",
        "Mobile service - we come to you",
        "Satisfaction focused",
    ]

    manifest = {
        "brand": {
            "display_name": "Valko's Mobile Detailing",
            "short_name": "Valko's Detailing",
            "tagline": "We come to you.",
            "color_palette_hint": "Dark navy/charcoal background with blue accents "
                                  "(per existing brand graphic + profile pic).",
            "logo_files": {
                "profile_pic": "assets/profile/profile.jpg",
                "brand_graphic_with_pricing": "assets/posts/DYldGi6NjNj/photo_01.jpg",
            },
        },
        "instagram_profile": {
            "username": profile_raw["account"],
            "full_name": profile_raw["full_name"],
            "bio": profile_raw.get("biography"),
            "followers": profile_raw.get("followers"),
            "posts_count": profile_raw.get("posts_count"),
            "url": profile_raw.get("url"),
            "service_area": "Greater Toronto Area (Scarborough / Toronto / Pickering)",
        },
        "contact": {
            "email": None,
            "phone": None,
            "booking_url": None,
            "instagram_dm": "https://www.instagram.com/valko_mobiledetailing/",
            "note": "Bookings via Instagram DM per captions ('Message us to book'). "
                    "Email/phone/booking URL not provided in IG profile - ask client.",
        },
        "services": services,
        "add_ons": add_ons,
        "why_choose_us": why_choose_us,
        "pricing_disclaimer": "Prices may vary depending on vehicle size & condition.",
        "before_after_pairs": [
            {
                "pair_id": "f150_front_cabin",
                "label": "Front cabin - dirty seats & sill",
                "before": "assets/posts/DL0SZ-cRF1m/photo_01.jpg",
                "after": "assets/posts/DL0SZ-cRF1m/photo_03.jpg",
            },
            {
                "pair_id": "f150_floor_mats",
                "label": "All-weather floor mats - caked dirt removed",
                "before": "assets/posts/DL0SZ-cRF1m/photo_02.jpg",
                "after": "assets/posts/DL0SZ-cRF1m/photo_04.jpg",
            },
            {
                "pair_id": "f150_rear_cabin",
                "label": "Rear cabin floor - vacuumed & shampooed",
                "before": "assets/posts/DL0SZ-cRF1m/photo_05.jpg",
                "after": "assets/posts/DL0SZ-cRF1m/photo_06.jpg",
            },
        ],
        "hero_candidates": [
            "assets/posts/DL0SZ-cRF1m/photo_08.jpg",
            "assets/posts/DL-vuXpR_dd/photo_01.jpg",
            "assets/posts/DL0SZ-cRF1m/photo_10.jpg",
        ],
        "gallery_pool": [
            "assets/posts/DL0SZ-cRF1m/photo_07.jpg",
            "assets/posts/DL0SZ-cRF1m/photo_08.jpg",
            "assets/posts/DL0SZ-cRF1m/photo_09.jpg",
            "assets/posts/DL0SZ-cRF1m/photo_10.jpg",
            "assets/posts/DXahs3IjdYp/photo_01.jpg",
            "assets/posts/DQndxkrDE2E/photo_01.jpg",
            "assets/posts/DL-vuXpR_dd/photo_01.jpg",
        ],
        "videos": [
            f"assets/posts/{p['shortcode']}/video_01.mp4"
            for p in posts_raw if (p.get("videos") or [])
        ],
        "posts": posts,
        "open_questions_for_client": [
            "Booking email and/or phone number?",
            "Confirm service area (just GTA? specific cities?)",
            "Any service we're missing (e.g. ceramic coat, headlight restoration)?",
            "Confirm starting prices are still current.",
            "Vehicle-size pricing matrix (sedan vs SUV vs truck) - any standard table?",
        ],
    }
    return manifest


def main() -> None:
    manifest = build()
    out = ASSETS / "posts.json"
    out.write_text(json.dumps(manifest, indent=2))
    print(f"Wrote {out.relative_to(ROOT)} ({out.stat().st_size:,} bytes)")
    print(f"  posts: {len(manifest['posts'])}")
    print(f"  before/after pairs: {len(manifest['before_after_pairs'])}")
    print(f"  hero candidates: {len(manifest['hero_candidates'])}")
    print(f"  gallery pool: {len(manifest['gallery_pool'])}")
    print(f"  videos: {len(manifest['videos'])}")


if __name__ == "__main__":
    main()
