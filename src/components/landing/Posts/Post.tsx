import React from 'react';
import styled from 'styled-components';
import { useConfig } from '../../../hooks/useConfig';
import { Post as PostModel } from '../../../models/Post.model';

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

const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.38rem;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: ${props => props.theme.text};
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
