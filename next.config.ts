import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
