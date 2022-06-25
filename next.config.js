const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withPlugins(
  [
    withPWA,
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ],
  nextConfiguration
);
