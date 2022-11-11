/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {  NEXT_PUBLIC_SENDIN_KEY: process.env.NEXT_PUBLIC_SENDIN_KEY  }
}

module.exports = nextConfig
