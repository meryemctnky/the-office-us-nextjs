/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['www.hizliresim.com', 'i.hizliresim.com'],
  },
};

module.exports = nextConfig;
