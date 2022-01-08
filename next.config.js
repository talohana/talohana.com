const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins(
  [withContentlayer(), withPWA()],
  nextConfiguration
);
