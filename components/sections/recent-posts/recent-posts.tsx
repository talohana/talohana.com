import { PostPreview } from '@components/blog';
import { H2 } from '@components/common';
import { Post } from '@models/generated';
import React from 'react';

interface Props {
  posts: Post[];
}

export const RecentPosts: React.VFC<Props> = ({ posts }) => {
  return (
    <section>
      <H2>Recent Posts</H2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};
