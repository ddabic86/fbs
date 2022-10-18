/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    MONGODB_PASSWORD: "0ZajXN20bwrZ9kV5",
    MONGODB_USERNAME: "ddabic",

    MONGODB_URI:
      "mongodb+srv://ddabic:0ZajXN20bwrZ9kV5@cluster0.vupeqhi.mongodb.net/fb?retryWrites=true&w=majority",

    TOKEN_SECRET: "ONr5vG9wadb9XM8aMOjhdOtMpd3tHYMl",

    EMAIL: "dabicdmmd@gmail.com",
    MAILING_ID:
      "232135230398-9jk8h8lu4a9bqkj13hvd94lhuk8f0tjp.apps.googleusercontent.com",
    MAILING_SECRET: "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",
    MAILING_REFRESH:
      "1//04Jm3sPd5X4itCgYIARAAGAQSNwF-L9IrChVENmFI24tRFBWsY9w9w7r5aCVgFqliuvVaffB8NPpNT3XJllbgr8eYyj5bsKuUv5Y",
    MAILING_ACCESS:
      "ya29.a0Aa4xrXNreldEL3fTQaU4uzzdKUkscE93N9ox07Rrm-7KKJ3V5dOJFoHmN93uJkeQ4-1sziblwu_v0M411gqXi1lI-uJfHmvhoTMlTDCuMVe4lrXl7amr1354aaXZu4qjsKPa0s-Qs5NnleR35PcZNe5lF326hAaCgYKATASARASFQEjDvL9YPeByqym9FI9qS_VrDkb1Q0165",
  },
};

module.exports = nextConfig;
