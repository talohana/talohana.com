import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MdxEdge } from '../../types';
import { PostPreview } from '../blog/post-preview';
import { Container } from '../common/container';

type Props = {
  posts: MdxEdge[];
};

export const Blog: React.FC<Props> = ({ posts }) => {
  const previews = posts.map(({ node }) => (
    <PostPreview key={node.id} fields={node.fields} />
  ));

  return (
    <Container as="section">
      <h2>Latest Posts</h2>
      <Posts>{previews}</Posts>
      <AllPosts>
        <Link to="/blog">view all posts</Link>
      </AllPosts>
    </Container>
  );
};

const Posts = styled.div`
  margin-bottom: 2rem;

  ${media.lessThan('large')`
    margin-bottom: 0;
  `}

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const AllPosts = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
