import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Blog } from '../components/landing/Blog';
import { Hero } from '../components/landing/Hero';
import { SEO } from '../components/SEO/SEO';
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
    <>
      <SEO />
      <Hero />
      <Blog posts={data.recentPosts.edges} />
    </>
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
