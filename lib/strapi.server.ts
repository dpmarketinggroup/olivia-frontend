import axios from "axios";

/** Len pre serverový kód (API routes, getStaticProps/getStaticPaths). */
export const STRAPI_URL =
  process.env.STRAPI_URL ?? "https://timely-luck-3c5514b137.strapiapp.com";

export const strapi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
});
