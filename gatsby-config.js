/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register(); // enable require of ts files
const { config } = require('./src/config/config');
module.exports = {
  siteMetadata: {
    defaultTitle: config.website.defaultTitle,
    titleTemplate: config.website.titleTemplate,
    description: config.description,
    image: config.image,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-179723340-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tal Ohana`,
        short_name: `Tal Ohana`,
        start_url: `/`,
        theme_color_in_head: false,
        display: `standalone`,
        icon: `src/images/favicon-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
