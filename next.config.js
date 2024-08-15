/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["www.themoviedb.org", "image.tmdb.org"],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
