#!/usr/bin/env node
/**
 * Copy raw scraped assets into public/media/ with semantic, URL-friendly names.
 * Idempotent: re-running overwrites destination files.
 */
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'assets');
const DST = path.join(ROOT, 'public', 'media');

const MAP = [
  // Brand
  ['profile/profile.jpg',                  'brand/logo.jpg'],
  ['posts/DYldGi6NjNj/photo_01.jpg',       'brand/pricing-card.jpg'],

  // Before/after pairs (Ford F-150 carousel DL0SZ-cRF1m)
  ['posts/DL0SZ-cRF1m/photo_01.jpg',       'before-after/f150-front-before.jpg'],
  ['posts/DL0SZ-cRF1m/photo_03.jpg',       'before-after/f150-front-after.jpg'],
  ['posts/DL0SZ-cRF1m/photo_02.jpg',       'before-after/f150-mats-before.jpg'],
  ['posts/DL0SZ-cRF1m/photo_04.jpg',       'before-after/f150-mats-after.jpg'],
  ['posts/DL0SZ-cRF1m/photo_05.jpg',       'before-after/f150-rear-before.jpg'],
  ['posts/DL0SZ-cRF1m/photo_06.jpg',       'before-after/f150-rear-after.jpg'],

  // Gallery hero shots
  ['posts/DL0SZ-cRF1m/photo_07.jpg',       'gallery/f150-rear-alt-angle.jpg'],
  ['posts/DL0SZ-cRF1m/photo_08.jpg',       'gallery/f150-exterior-three-quarter.jpg'],
  ['posts/DL0SZ-cRF1m/photo_09.jpg',       'gallery/f150-side-with-rack.jpg'],
  ['posts/DL0SZ-cRF1m/photo_10.jpg',       'gallery/f150-rear-quarter.jpg'],

  // Reel cover stills (used as fallback if ffmpeg poster missing)
  ['posts/DXahs3IjdYp/photo_01.jpg',       'gallery/bmw-interior-detail-time.jpg'],
  ['posts/DL-vuXpR_dd/photo_01.jpg',       'gallery/santa-fe-exterior.jpg'],
  ['posts/DQndxkrDE2E/photo_01.jpg',       'gallery/blue-bmw-sedan.jpg'],
  ['posts/DL0QV0WRpcV/photo_01.jpg',       'gallery/audi-q3-dirty-mat.jpg'],
  ['posts/DX8L8K0Na5N/photo_01.jpg',       'gallery/pressure-wash-process.jpg'],
];

function copy(src, dst) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
  const { size } = fs.statSync(dst);
  console.log(`  ${path.relative(ROOT, dst)}  (${size.toLocaleString()} bytes)`);
}

console.log('Copying brand + photo assets:');
for (const [from, to] of MAP) {
  const src = path.join(SRC, from);
  if (!fs.existsSync(src)) {
    console.error(`  MISSING: ${from}`);
    process.exit(1);
  }
  copy(src, path.join(DST, to));
}
console.log(`\nDone. ${MAP.length} files copied to public/media/.`);
