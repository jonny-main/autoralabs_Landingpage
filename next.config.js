const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: 'output: export' removed because middleware requires server-side rendering
  // Netlify will handle this with serverless functions
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
