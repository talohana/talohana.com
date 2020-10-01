import React from 'react';
import { Layout } from '../components/common/Layout/Layout';
import { Posts } from '../components/landing/Posts/Posts';
import { Hero } from '../components/landing/Hero/Hero';
import { graphql } from 'gatsby';
import { Post } from '../models/Post.model';
import { Element } from 'react-scroll';
import { Header } from '../components/common/Header/Header';
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
