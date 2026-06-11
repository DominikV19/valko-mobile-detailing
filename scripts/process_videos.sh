#!/usr/bin/env bash
# Re-encode IG mp4s to web-friendly H.264 baseline + faststart, extract poster jpgs.
# Idempotent: skips files whose output already exists.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/assets/posts"
DST="$ROOT/public/media/videos"
mkdir -p "$DST"

# shortcode -> semantic name
declare -a MAP=(
  "DXahs3IjdYp:bmw-interior"
  "DL-vuXpR_dd:santa-fe-exterior"
  "DQndxkrDE2E:blue-bmw"
  "DL0QV0WRpcV:audi-q3"
  "DX8L8K0Na5N:pressure-wash"
  "DL0SZ-cRF1m:f150-carousel"
)

for entry in "${MAP[@]}"; do
  shortcode="${entry%%:*}"
  name="${entry##*:}"
  in="$SRC/$shortcode/video_01.mp4"
  out_mp4="$DST/$name.mp4"
  out_jpg="$DST/$name.jpg"

  if [[ ! -f "$in" ]]; then
    echo "MISSING: $in" >&2
    exit 1
  fi

  if [[ -f "$out_mp4" ]]; then
    echo "  (skip) $out_mp4 already exists"
  else
    echo "  encoding $name.mp4"
    ffmpeg -loglevel error -y -i "$in" \
      -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
      -movflags +faststart \
      -c:a aac -b:a 96k \
      "$out_mp4"
  fi

  if [[ -f "$out_jpg" ]]; then
    echo "  (skip) $out_jpg already exists"
  else
    echo "  poster   $name.jpg"
    ffmpeg -loglevel error -y -ss 0.5 -i "$in" -frames:v 1 -q:v 3 "$out_jpg"
  fi
done

echo
echo "Done. Videos + posters in public/media/videos/."
ls -lh "$DST"
