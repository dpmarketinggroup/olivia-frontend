module.exports = {
  i18n: {
    locales: ["en", "sk"],
    defaultLocale: "sk",
  },
  localePath: "./public/locales", // ak je iná cesta, uveď ju
  localeStructure: "{{lng}}/{{ns}}",
  react: { useSuspense: false },
};
