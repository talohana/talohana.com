import React from 'react';
import { Post as PostModel } from '../../../models/Post.model';
import { Post } from './Post';
import bookLover from '../../../assets/illustrations/book_lover.svg';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Container } from '../../common/Container';

interface Props {
  posts: PostModel[];
}

export const Posts: React.FC<Props> = ({ posts = [] }) => {
  const recentPosts = posts.map(post => (
    <Post key={post.uniqueSlug} post={post} />
  ));

  return (
    <Wrapper>
      <Illustration>
        <img src={bookLover} alt="Book Lover Illustration" />
      </Illustration>
      <Content>
        <h2>Recent Posts</h2>
        {recentPosts}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 90vh;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-top: 1rem;
  `}
`;

const Content = styled.div`
  flex: 2;
`;

const Illustration = styled.div`
  flex: 1;
  margin-right: 2rem;

  ${media.lessThan('large')`
    margin-right:0;
  `}
`;
