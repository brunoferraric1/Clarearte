/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images (for future use with Sanity or static images)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
