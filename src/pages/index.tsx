import { graphql } from 'gatsby';
import React from 'react';
import { Element } from 'react-scroll';
import { Header } from '../components/common/Header';
import { Layout } from '../components/common/Layout';
import { Hero } from '../components/landing/Hero';
import { Posts } from '../components/landing/Posts/Posts';
import { Post } from '../models/Post';
interface GetLandingPage {
  posts: {
    nodes: Post[];
  };
}

interface Props {
  data: GetLandingPage;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="posts">
        <Posts posts={data.posts.nodes} />
      </Element>
    </Layout>
  );
};

export const query = graphql`
  query GetLandingPage {
    posts: allMediumPost(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      nodes {
        title
        createdAt(formatString: "DD MMMM YYYY")
        uniqueSlug
        virtuals {
          subtitle
        }
        author {
          username
        }
      }
    }
  }
`;

export default IndexPage;
