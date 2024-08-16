/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { customKey: process.env.TEST },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
