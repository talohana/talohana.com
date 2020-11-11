/* eslint-disable @typescript-eslint/no-var-requires */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      blog: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  createPosts({ actions, edges: data.blog.edges });
};

const createPosts = ({ actions, edges }) => {
  const { createPage } = actions;

  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node;
    const next = i === edges.length - 1 ? null : edges[i + 1].node;
    const path = node.fields.slug;

    createPage({
      path,
      component: require.resolve('./src/templates/post.tsx'),
      context: {
        id: node.id,
        prevId: prev?.id ?? null,
        nextId: next?.id ?? null,
      },
    });
  });
};

exports.onCreateNode = (...args) => {
  if (args[0].node.internal.type === 'Mdx') {
    onCreateMdxNode(...args);
  }
};

const onCreateMdxNode = ({ actions, node }) => {
  const { createNodeField } = actions;

  const slug = `/blog/${node.frontmatter.slug}`;

  createNodeField({
    name: 'id',
    node,
    value: node.id,
  });

  createNodeField({
    name: 'title',
    node,
    value: node.frontmatter.title,
  });

  createNodeField({
    name: 'description',
    node,
    value: node.frontmatter.description,
  });

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  });

  createNodeField({
    name: 'date',
    node,
    value: node.frontmatter.date,
  });

  createNodeField({
    name: 'banner',
    node,
    value: node.frontmatter.banner,
  });

  createNodeField({
    name: 'bannerCredit',
    node,
    value: node.frontmatter.bannerCredit,
  });

  createNodeField({
    name: 'bannerCreditUrl',
    node,
    value: node.frontmatter.bannerCreditUrl,
  });

  createNodeField({
    name: 'categories',
    node,
    value: node.frontmatter.categories || [],
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Site {
      siteMetadata: SiteSiteMetadata!
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
