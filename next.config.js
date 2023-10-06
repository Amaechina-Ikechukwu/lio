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
      {
        protocol: 'https',
        hostname: "www.flaticon.com",
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: "fontawesome.com",
        port: '',
        // pathname: '/account123/**',
      },
        {
        protocol: 'https',
        hostname: "github.githubassets.com",
        port: '',
        // pathname: '/account123/**',
      },
        {
        protocol: 'https',
        hostname: "upload.wikimedia.org",
        port: '',
        // pathname: '/account123/**',
      },
        {
        protocol: 'https',
        hostname: "cdn-icons-png.flaticon.com",
        port: '',
        // pathname: '/account123/**',
      },

        {
        protocol: 'https',
        hostname: "img.freepik.com",
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
   async rewrites() {
    return [
      {
        source: "/public/index.html",
        destination: "/app/api/auth/connect/route.js",
      },
    ];
  },
}

module.exports = nextConfig
