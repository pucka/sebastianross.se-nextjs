const path = require("path");

module.exports = {
  poweredByHeader: false,
  wcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
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
