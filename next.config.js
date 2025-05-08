const createNextIntlPlugin = require("next-intl/plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"], // add this
  output: "standalone", // Ensure proper deployment on Vercel
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
module.exports = {
  reactStrictMode: false,
};

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);
