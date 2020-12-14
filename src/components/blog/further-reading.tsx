import { Maybe, Mdx } from '@types';
import React from 'react';
import tw from 'twin.macro';
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
          <h3 tw="text-right text-primary uppercase">Next Post</h3>
          <PostPreview post={nextPost.fields} />
        </div>
      )}
      {prevPost?.fields && (
        <div>
          <h3 tw="uppercase text-primary">Previous Post</h3>
          <PostPreview post={prevPost.fields} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`my-2 space-y-6`;
