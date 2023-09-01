/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: ['firebasestorage.googleapis.com'], // Add more domains if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
