/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
module.exports = withImages(nextConfig);
