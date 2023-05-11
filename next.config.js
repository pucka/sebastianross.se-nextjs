const path = require("path");

module.exports = {
  poweredByHeader: false,
  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
  async redirects() {
    return [
      {
        source: "/jobb",
        destination: "/work",
        permanent: false,
      },
    ];
  },
};
