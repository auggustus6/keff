module.exports = {
  locales: ["en", "pt"],
  defaultLocale: "pt",
  pages: {
    "*": ["common"],
  },

  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default),
};
