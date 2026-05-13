/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mma-ibk.at',
      },
    ],
  },
}

module.exports = nextConfig
