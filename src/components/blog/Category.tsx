import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MdxGroupConnection } from '../../types';
import { UppercaseHeading } from '../common/UppercaseHeading';
import { PostPreview } from './PostPreview';

type Props = {
  category: MdxGroupConnection;
};

export const Category: React.FC<Props> = ({ category }) => {
  const { fieldValue, edges } = category;
  const posts = edges.map(({ node }) => (
    <PostPreview key={node.id} fields={node.fields} />
  ));

  return (
    <Wrapper>
      <UppercaseHeading as="h3">
        Read more about <Link to="/">{fieldValue}</Link>
      </UppercaseHeading>
      <Posts>{posts}</Posts>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const Posts = styled.div`
  & > * {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
