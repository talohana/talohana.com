import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { PostCard } from '@components/blog/post-card/post-card';
import { compareDesc, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import React from 'react';

interface Props {
  posts: Post[];
}

const Blog: React.VFC<Props> = ({ posts }) => {
  const cards = posts.map(post => <PostCard key={post._id} post={post} />);

  return (
    <div>
      <div className="grid grid-cols-1 gap-8">{cards}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = [...allPosts];
  posts.sort((a, b) =>
    compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
