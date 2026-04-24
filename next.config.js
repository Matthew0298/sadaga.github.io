/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sadaga-site',
  assetPrefix: '/sadaga-site/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;