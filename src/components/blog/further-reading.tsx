import { Maybe, Mdx } from '@types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
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
          <StyledUppercaseHeading as="h3" tw="text-right">
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
  ${tw`my-2 space-y-6`}
`;

const StyledUppercaseHeading = styled(UppercaseHeading)`
  ${tw`text-primary`}
`;
