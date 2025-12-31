/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images (for future use with Sanity or static images)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Force correct workspace root to avoid incorrect inference when multiple lockfiles exist
  // This also ensures vendor chunks (e.g., Radix) are properly traced for deployment
  outputFileTracingRoot: process.cwd(),
}

export default nextConfig
