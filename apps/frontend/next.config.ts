import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // static export → S3
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  transpilePackages: ['@snapsport/types'], // import TS directly from workspace
};

export default nextConfig;
