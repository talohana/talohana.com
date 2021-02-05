import { Maybe, Mdx } from '@models';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PostPreview } from './post-preview';

type Props = {
  nextPost: Maybe<Mdx>;
  prevPost: Maybe<Mdx>;
};

const Wrapper = tw.div`my-2 space-y-6`;

const Title = styled.h3<{ next?: boolean }>(({ next = false }) => [
  tw`uppercase text-primary`,
  next && tw`text-right`,
]);

export const FurtherReading: React.FC<Props> = ({ prevPost, nextPost }) => {
  return (
    <Wrapper>
      {nextPost?.fields && (
        <div>
          <Title next>Next Post</Title>
          <PostPreview post={nextPost.fields} />
        </div>
      )}
      {prevPost?.fields && (
        <div>
          <Title>Previous Post</Title>
          <PostPreview post={prevPost.fields} />
        </div>
      )}
    </Wrapper>
  );
};
