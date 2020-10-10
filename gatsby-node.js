exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      posts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
        categories: distinct(field: frontmatter___categories)
      }
    }
  `);

  createPosts({ actions, nodes: data.posts.edges });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      slug: String!
      description: String!
      categories: [String!]!
      keywords: [String!]!
    }

    type Mdx {
      frontmatter: MdxFrontmatter!
    }

    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
      defaultTitle: String!
      defaultDescription: String!
      defaultBanner: String!
      headline: String!
      siteLanguage: String!
      ogLanguage: String!
      author: String!
      twitter: String!
      twitterUsername: String!
    }
  `;

  createTypes(typeDefs);
};

const createPosts = ({ actions, nodes }) => {
  nodes.forEach(({ node }) => {
    actions.createPage({
      component: require.resolve('./src/templates/post.tsx'),
      path: `/blog/${node.frontmatter.slug}`,
      context: {
        id: node.id,
      },
    });
  });
};
