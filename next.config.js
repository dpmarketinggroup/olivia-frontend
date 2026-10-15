/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      // médiá zo Strapi Cloud
      { protocol: "https", hostname: "timely-luck-3c5514b137.media.strapiapp.com" },
    ],
  },
  async redirects() {
    return [
      // strešné apartmány sú dočasne skryté
      { source: "/stresne-apartmany", destination: "/ponuka-apartmanov", permanent: false },
    ];
  },
  env: {
    NEXT_PUBLIC_SENDIN_KEY: process.env.NEXT_PUBLIC_SENDIN_KEY,
    SEND_PASSWD: process.env.SEND_PASSWD,
    SEND_MAIL: process.env.SEND_MAIL,
  },
};

module.exports = nextConfig;
