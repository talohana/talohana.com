import React from 'react';
import { useConfig } from '../../../../hooks/useConfig';
import { Post as PostModel } from '../../../../models/Post.model';
import { Wrapper, PostTitle, PostDate } from './styles';

interface Props {
  post: PostModel;
}

export const Post: React.FC<Props> = ({ post }) => {
  const { title, createdAt, virtuals, author, uniqueSlug } = post;
  const { medium } = useConfig();

  return (
    <Wrapper>
      <a
        href={`${medium.url}/${author.username}/${uniqueSlug}`}
        target="_blank"
      >
        <PostTitle>{title}</PostTitle>
      </a>
      <PostDate>{createdAt}</PostDate>
      <p>{virtuals.subtitle}</p>
    </Wrapper>
  );
};
