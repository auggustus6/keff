const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextTranslate = require("next-translate");

const nextConfig = () => {
  const env = {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_API_KEY_TYNE: process.env.REACT_API_KEY_TYNE,
    NEXT_PUBLIC_VERSION: process.env.NEXT_PUBLIC_VERSION,
  };

  return {
    env,
    webpack: (config, { isServer }) => {
      return config;
    },
    async redirects() {
      return [
        {
          source: "/mude/cupom",
          destination:
            "https://mudebooks.com.br/cupom/MUDE-8A7AEC28-18CE-48AB-9D81-7B8E534D2C8F-1633319322805",
          permanent: true,
        },
      ];
    },
  };
};

module.exports = withPlugins([withImages(), nextTranslate], nextConfig());
