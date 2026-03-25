// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [new URL('https://assets.example.com/account123/**')],
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//     images: {
//     unoptimized: true, // Required if you're using next/image
//   },
//   trailingSlash: true,
//   async rewrites() {
//     return [
//       {
//         source: "/api/proxy/:path*",
//         destination: "https://jameshughes.thenightowl.team/api/:path*",
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Highly recommended for static export (especially if using next/image)
  images: {
    unoptimized: true,  // disables built-in image optimization → required for static export
  },

  // Often useful for static hosting / clean URLs
  trailingSlash: true,
};

module.exports = nextConfig;