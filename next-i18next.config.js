const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "sk"],
    defaultLocale: "sk",
  },
  localePath: path.resolve("./public/locales"),
  localeStructure: "{{lng}}/{{ns}}",
  react: { useSuspense: false },
};
