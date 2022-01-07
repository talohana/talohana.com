import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { PostCard } from '@components/blog/post-card/post-card';
import { H2 } from '@components/common';
import { compareDesc, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import React from 'react';

interface Props {
  posts: Post[];
}

const Home: React.VFC<Props> = ({ posts }) => {
  const cards = posts.map(post => <PostCard key={post._id} post={post} />);

  return (
    <div className="py-4">
      <div>
        <H2>Recent Posts</H2>
        <div className="grid grid-cols-1 gap-8">{cards}</div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPosts.slice(0, 5);
  posts.sort((a, b) =>
    compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
