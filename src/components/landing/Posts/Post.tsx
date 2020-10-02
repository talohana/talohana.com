import React from 'react';
import styled from 'styled-components';
import { config } from '../../../config';
import { Post as PostModel } from '../../../models/Post.model';

interface Props {
  post: PostModel;
}

export const Post: React.FC<Props> = ({ post }) => {
  const { title, createdAt, virtuals, author, uniqueSlug } = post;

  return (
    <Wrapper>
      <a
        href={`${config.medium.url}/${author.username}/${uniqueSlug}`}
        target="_blank"
      >
        <PostTitle>{title}</PostTitle>
      </a>
      <PostDate>{createdAt}</PostDate>
      <p>{virtuals.subtitle}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.38rem;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: currentColor;
      border-radius: 10px;
    }
  }
`;

const PostTitle = styled.h3`
  color: ${props => props.theme.primary};
`;

const PostDate = styled.span`
  text-transform: uppercase;
`;
