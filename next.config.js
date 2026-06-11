/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
