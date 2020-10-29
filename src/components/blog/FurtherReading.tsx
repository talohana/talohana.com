import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Mdx } from '../../types';
import { UppercaseHeading } from '../common/UppercaseHeading';
import { PostPreview } from './PostPreview';

type Props = {
  nextPost: Mdx | null;
  prevPost: Mdx | null;
};

export const FurtherReading: React.FC<Props> = ({ prevPost, nextPost }) => {
  return (
    <Wrapper>
      {nextPost && (
        <div>
          <UppercaseHeading as="h3">Next Post</UppercaseHeading>
          <PostPreview fields={nextPost.fields} />
        </div>
      )}
      {prevPost && (
        <div>
          <UppercaseHeading as="h3">Previous Post</UppercaseHeading>
          <PostPreview fields={prevPost.fields} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    font-weight: 200;
  }

  & > *:not(:last-child) {
    margin-bottom: 2rem;

    ${media.lessThan('large')`
      margin-bottom: 0;
    `}
  }
`;
