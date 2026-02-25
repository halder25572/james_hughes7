// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [new URL('https://assets.example.com/account123/**')],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://jameshughes.thenightowl.team/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
