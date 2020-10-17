import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MdxEdge } from '../../types';
import { PostPreview } from '../blog/PostPreview';

type Props = {
  posts: MdxEdge[];
};

export const Blog: React.FC<Props> = ({ posts }) => {
  const previews = posts.map(({ node }) => (
    <PostPreview key={node.id} fields={node.fields} />
  ));

  return (
    <Wrapper>
      <h2>Blog</h2>
      <Posts>{previews}</Posts>
      <AllPosts>
        <Link to="/blog">all posts</Link>
      </AllPosts>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
`;

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
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
`;
