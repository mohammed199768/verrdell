/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // In production: images cached 30 days after first generation
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days

    // Exact sizes matching our layout — avoids generating extra variants
    deviceSizes: [384, 640, 750, 1080],
    imageSizes: [160, 220, 280],
  },
};

export default nextConfig;
