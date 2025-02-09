/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Suppress punycode warning
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ }
    ];
    return config;
  },
  // Increase timeout for requests
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      timeout: 10000
    }
  }
}

module.exports = nextConfig 