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
    <PostPreview key={node.id} frontmatter={node.frontmatter} />
  ));

  return (
    <Wrapper>
      <UppercaseHeading as="h3">
        Read more about <Link to="/">{fieldValue}</Link>
      </UppercaseHeading>
      <div>{posts}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;
