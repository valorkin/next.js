// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
  turbopack: {
    resolveAlias:
      process.env.NODE_ENV === "production"
        ? {
            // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
            "@formatjs/icu-messageformat-parser":
              "@formatjs/icu-messageformat-parser/no-parser",
          }
        : {},
  },
  webpack(config, { dev, ...other }) {
    if (!dev) {
      // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
      config.resolve.alias["@formatjs/icu-messageformat-parser"] =
        "@formatjs/icu-messageformat-parser/no-parser";
    }
    return config;
  },
};
