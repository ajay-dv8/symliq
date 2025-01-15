/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'assets.aceternity.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
};

export default nextConfig;
