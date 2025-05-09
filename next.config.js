/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  i18n,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_SENDIN_KEY: process.env.NEXT_PUBLIC_SENDIN_KEY,
    SEND_PASSWD: process.env.SEND_PASSWD,
    SEND_MAIL: process.env.SEND_MAIL,
  },
};

module.exports = nextConfig;
