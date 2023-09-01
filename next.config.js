/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: ['firebasestorage.googleapis.com',"lh3.googleusercontent.com"], // Add more domains if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        // pathname: '/account123/**',
      },
       {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
