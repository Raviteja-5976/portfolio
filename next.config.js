/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/raviteja-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/raviteja-portfolio/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;