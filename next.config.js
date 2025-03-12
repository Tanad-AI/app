const createNextIntlPlugin = require("next-intl/plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"], // add this
  output: "standalone", // Ensure proper deployment on Vercel
};

module.exports = nextConfig;
module.exports = {
  reactStrictMode: false,
};

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);
