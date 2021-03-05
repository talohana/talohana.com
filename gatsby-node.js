const { resolve } = require('path');
const { compilerOptions } = require('./tsconfig.json');

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

exports.onCreateNode = (...args) => {
  if (args[0].node.internal.type === 'Mdx') {
    onCreateMdxNode(...args);
  }
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

const resolveTsconfigPathsToAlias = () => {
  const { paths } = compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach(item => {
    const key = item.replace('/*', '');
    const value = resolve(
      __dirname,
      paths[item][0].replace('/*', '').replace('*', '')
    );

    aliases[key] = value;
  });

  return aliases;
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: resolveTsconfigPathsToAlias(),
    },
  });
};
