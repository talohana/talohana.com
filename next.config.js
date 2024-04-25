const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
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
