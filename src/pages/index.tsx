import { PostCard } from '@/components/blog/post-card';
import { getPostsFrontmatter } from '@/lib/mdx';
import me from '@/public/assets/me.jpg';
import { Frontmatter } from '@/types/frontmatter';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

interface Props {
  posts: Frontmatter[];
}

const Home: React.VFC<Props> = ({ posts }) => {
  const cards = posts.map(post => <PostCard key={post.slug} post={post} />);

  return (
    <>
      <NextSeo title="Home" />
      <div className="py-4 container space-y-12">
        <div className="flex flex-col space-y-4 md:flex-row-reverse justify-between">
          <div className="relative w-32 aspect-square">
            <Image
              src={me}
              quality={50}
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
          <h2 className="mb-4 underline decoration-primary-800 underline-offset-2">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 gap-8">{cards}</div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPostsFrontmatter();

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
};

export default Home;
