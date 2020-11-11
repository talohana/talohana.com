import { MdxEdge, MdxFields } from '@types';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Search } from '../components/blog/search';
import { Container } from '../components/common/container';
import { Layout } from '../components/common/layout';
import { SEO } from '../components/SEO/seo';

type PageData = {
  posts: {
    edges: MdxEdge[];
  };
  categories: {
    distinct: string[];
  };
};
type Props = PageProps<PageData>;

export const Blog: React.FC<Props> = ({ data }) => {
  const { posts: postEdges, categories } = data;
  const posts = postEdges.edges.map(edge => edge.node.fields) as MdxFields[];

  return (
    <Layout customSEO>
      <Container>
        <SEO title="Blog" />
        <Search posts={posts} categories={categories.distinct} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  fragment PostPreview on Mdx {
    id
    fields {
      title
      description
      date(formatString: "DD MMM, YYYY")
      slug
      categories
      banner {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  query {
    posts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
    categories: allMdx {
      distinct(field: frontmatter___categories)
    }
  }
`;

export default Blog;
