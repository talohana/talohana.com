const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};

module.exports = withPlugins(
  [withContentlayer(), withPWA(), withBundleAnalyzer],
  nextConfiguration
);
