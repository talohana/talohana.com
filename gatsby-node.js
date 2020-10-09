exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  createPosts({ actions, nodes: data.allMdx.edges });
};

const createPosts = ({ actions, nodes }) => {
  nodes.forEach(({ node }) => {
    actions.createPage({
      component: require.resolve('./src/templates/PostTemplate.tsx'),
      path: `/blog/${node.frontmatter.slug}`,
      context: {
        id: node.id,
      },
    });
  });
};
