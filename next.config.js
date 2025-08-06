/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Remove basePath and assetPrefix for custom domain
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
};

module.exports = nextConfig;