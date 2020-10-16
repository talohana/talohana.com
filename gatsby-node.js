exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      blog: allMdx {
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
        prev,
        next,
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

  createNodeField({
    name: 'keywords',
    node,
    value: node.frontmatter.keywords || [],
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MdxFields {
      id: String!
      title: String!
      description: String!
      slug: String!
      date: Date!
      banner: File!
      bannerCredit: String!
      bannerCreditUrl: String!
      categories: [String!]!
      keywords: [String!]!
    }

    type Mdx {
      fields: MdxFields!
    }

    type Site {
      siteMetadata: SiteSiteMetadata!
    }

    type SiteSiteMetadata {
      defaultTitle: String!
      titleTemplate: String!
      description: String!
      image: String!
      lang: String!
    }
  `;

  createTypes(typeDefs);
};
