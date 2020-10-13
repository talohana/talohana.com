import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Category } from '../components/blog/Category';
import { Container } from '../components/blog/Container';
import { Layout } from '../components/common/Layout';
import { SEO } from '../components/SEO/SEO';
import { MdxGroupConnection } from '../types';

type PageData = {
  allMdx: {
    group: MdxGroupConnection[];
  };
};
type Props = PageProps<PageData>;

export const Blog: React.FC<Props> = ({ data }) => {
  const categories = data.allMdx.group.map(category => {
    return <Category key={category.fieldValue} category={category} />;
  });

  return (
    <Layout customSEO>
      <Container>
        <SEO title="Blog" />
        {categories}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___categories, limit: 3) {
        fieldValue
        edges {
          node {
            id
            slug
            frontmatter {
              title
              description
              date(formatString: "DD MMM, YYYY")
              slug
              banner {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
