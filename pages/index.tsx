import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { PostCard } from '@components/blog/post-card/post-card';
import profile from '@public/assets/profile.jpg';
import { compareDesc, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

interface Props {
  posts: Post[];
}

const Home: React.VFC<Props> = ({ posts }) => {
  const cards = posts.map(post => <PostCard key={post._id} post={post} />);

  return (
    <div className="py-4 container space-y-12">
      <div className="flex flex-col space-y-4 md:flex-row-reverse justify-between">
        <div className="relative w-32 aspect-square">
          <Image
            src={profile}
            alt="Tal Ohana profile picture"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div>
          <h1>Tal Ohana</h1>
          <h4>Software Engineer at X</h4>
          <h4>JavaScript, TypeScript and GraphQL enthusiast</h4>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="underline decoration-primary-800 underline-offset-2">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 gap-8">{cards}</div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPosts.slice(0, 3);
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
