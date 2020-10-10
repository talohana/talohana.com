const STYLE_PLUGINS = [
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/styles/typography`,
    },
  },
];

const MEDIA_PLUGINS = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
];

const SEO_PLUGINS = [
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
];

const CONTENT_SOURCE_PLUGINS = [
  {
    resolve: `gatsby-source-medium`,
    options: {
      username: '@tal.ohana.x',
    },
  },
];

const BLOG_PLUGINS = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content/blog`,
      name: 'blog',
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: ['.mdx', '.md'],
      gatsbyRemarkPlugins: [
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
      plugins: [`gatsby-remark-images`],
    },
  },
];

module.exports = {
  siteMetadata: {
    siteUrl: 'https://talohana.com/',
    defaultTitle: 'Tal Ohana',
    defaultDescription: 'Tal Ohana, a Software Developer from Israel.',
    defaultBanner: '/images/banner.png',
    headline: 'TODO:',
    siteLanguage: 'TODO:',
    ogLanguage: 'TODO:',
    author: '@talohana',
    twitter: 'https://twitter.com/talohanax',
    twitterUsername: '@talohanax',
  },
  plugins: [
    ...STYLE_PLUGINS,
    ...MEDIA_PLUGINS,
    ...SEO_PLUGINS,
    ...CONTENT_SOURCE_PLUGINS,
    ...BLOG_PLUGINS,
  ],
};
