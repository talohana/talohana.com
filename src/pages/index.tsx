import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Element } from 'react-scroll';
import { Container } from '../components/common/Container';
import { Layout } from '../components/common/Layout';
import { Blog } from '../components/landing/Blog';
import { Hero } from '../components/landing/Hero';
import { File, MdxEdge } from '../types';

type PageData = {
  recentPosts: {
    edges: MdxEdge[];
  };
  profileImage: File;
};

type Props = PageProps<PageData>;

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="blog">
          <Blog posts={data.recentPosts.edges} />
        </Element>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    recentPosts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`;

export default IndexPage;
