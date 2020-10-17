import { graphql, PageProps } from 'gatsby';
import React from 'react';
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
      <Hero />
      <Blog posts={data.recentPosts.edges} />
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
