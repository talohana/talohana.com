import React from 'react';
import { Post as PostModel } from '../../../models/Post.model';
import { Post } from './Post/Post';
import { Content, Illustration, Wrapper } from './styles';
import bookLover from '../../../assets/illustrations/book_lover.svg';

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
