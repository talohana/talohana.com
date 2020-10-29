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
          <StyledUppercaseHeading as="h3" next>
            Next Post
          </StyledUppercaseHeading>
          <PostPreview fields={nextPost.fields} />
        </div>
      )}
      {prevPost && (
        <div>
          <StyledUppercaseHeading as="h3">Previous Post</StyledUppercaseHeading>
          <PostPreview fields={prevPost.fields} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1rem;

  ${media.lessThan('large')`
      margin-bottom: 0;
  `}

  & > *:not(:last-child) {
    margin-bottom: 2rem;

    ${media.lessThan('large')`
      margin-bottom: 0;
  `}
  }
`;

const StyledUppercaseHeading = styled(UppercaseHeading)<{ next?: boolean }>`
  font-weight: 200;
  text-align: ${props => (props.next ? 'right' : 'left')};
  color: ${props => props.theme.primary};
`;
