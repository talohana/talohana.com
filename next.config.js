const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
};

module.exports = withPlugins([withContentlayer()], nextConfiguration);
