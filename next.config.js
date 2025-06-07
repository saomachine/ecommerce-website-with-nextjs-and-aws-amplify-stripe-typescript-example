
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com"],
    minimumCacheTTL: 7884000,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This line enables static site export (no SSR)
};
module.exports = nextConfig;



// const withPWA = require('next-pwa')
// const nextConfig = {
//   reactStrictMode: true,
//   productionBrowserSourceMaps: true,
//   swcMinify: true,
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com"],
//     minimumCacheTTL: 7884000,
//   },
//   pwa: {
//     dest: 'public'
//   },
// };

// module.exports = withPWA(nextConfig);
