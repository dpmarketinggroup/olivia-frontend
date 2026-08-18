/**
 * Strapi vyžaduje API token, ktorý nesmie skončiť v klientskom bundle.
 * Prehliadač preto chodí na proxy v pages/api/strapi, ktoré token doplní na serveri.
 */
export const STRAPI_PROXY = "/api/strapi";
