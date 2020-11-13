import { Maybe, Mdx } from '@types';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { UppercaseHeading } from '../common/uppercase-heading';
import { PostPreview } from './post-preview';

type Props = {
  nextPost: Maybe<Mdx>;
  prevPost: Maybe<Mdx>;
};

export const FurtherReading: React.FC<Props> = ({ prevPost, nextPost }) => {
  return (
    <Wrapper>
      {nextPost?.fields && (
        <div>
          <StyledUppercaseHeading as="h3" next>
            Next Post
          </StyledUppercaseHeading>
          <PostPreview post={nextPost.fields} />
        </div>
      )}
      {prevPost?.fields && (
        <div>
          <StyledUppercaseHeading as="h3">Previous Post</StyledUppercaseHeading>
          <PostPreview post={prevPost.fields} />
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
