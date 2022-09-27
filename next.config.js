/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["www.themoviedb.org"],
  },
};

module.exports = nextConfig;
