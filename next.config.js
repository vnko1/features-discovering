/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { customKey: process.env.TEST, url: process.env.URL },
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
