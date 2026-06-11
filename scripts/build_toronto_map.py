"""Compose a static Toronto map by stitching OSM tiles. Run once -> public/media/toronto-map.png.

Uses CartoDB's dark_nolabels basemap (free, no key, attribution required) for a clean
dark map that matches the site's color palette.
"""
import math
import os
import time
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

LAT = 43.6532    # Toronto City Hall area
LON = -79.3832
ZOOM = 10
# How many tiles wide/tall (must be odd so center tile sits in the middle)
NX, NY = 5, 4    # ~landscape composition covering GTA
TILE = 256

OUT = Path(__file__).resolve().parent.parent / "public" / "media" / "toronto-map.png"

UA = "ValkoWebsiteBuild/1.0 (one-off static asset; see github)"


def lonlat_to_tile(lon, lat, zoom):
    """Slippy-map tile coordinates."""
    n = 2 ** zoom
    x = (lon + 180.0) / 360.0 * n
    lat_rad = math.radians(lat)
    y = (1.0 - math.log(math.tan(lat_rad) + 1.0 / math.cos(lat_rad)) / math.pi) / 2.0 * n
    return x, y


def fetch_tile(z, x, y, subdomain="a"):
    url = f"https://{subdomain}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return Image.open(BytesIO(resp.read())).convert("RGBA")


def main():
    cx, cy = lonlat_to_tile(LON, LAT, ZOOM)
    cxi, cyi = int(cx), int(cy)

    # Top-left tile index
    x0 = cxi - NX // 2
    y0 = cyi - NY // 2

    # Tiles served @2x are 512px each
    tile_px = 512
    canvas = Image.new("RGBA", (NX * tile_px, NY * tile_px))

    print(f"center tile ({cxi},{cyi}) at zoom {ZOOM} — composing {NX}x{NY} = {NX*NY} tiles @2x")

    subdomains = ["a", "b", "c", "d"]
    for ix in range(NX):
        for iy in range(NY):
            tx, ty = x0 + ix, y0 + iy
            sd = subdomains[(ix * NY + iy) % len(subdomains)]
            try:
                tile = fetch_tile(ZOOM, tx, ty, subdomain=sd)
            except Exception as e:
                print(f"  WARN tile ({tx},{ty}) failed: {e}")
                continue
            canvas.paste(tile, (ix * tile_px, iy * tile_px))
            print(f"  tile ({tx},{ty}) -> ({ix*tile_px},{iy*tile_px})")
            time.sleep(0.05)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUT, format="PNG", optimize=True)
    print(f"saved {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
