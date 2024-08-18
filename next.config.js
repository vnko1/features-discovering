/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNextVideo } = require("next-video/process");
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

module.exports = withNextVideo(nextConfig);
