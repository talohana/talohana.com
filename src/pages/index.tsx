import { PostCard } from '@/components/blog/post-card';
import { getPostsFrontmatter } from '@/lib/mdx';
import me from '@/public/assets/me.jpg';
import { Frontmatter } from '@/types/frontmatter';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
interface Props {
  posts: Frontmatter[];
}

const Home: React.VFC<Props> = ({ posts }) => {
  const cards = posts.map(post => (
    <PostCard key={post.slug} frontmatter={post} />
  ));

  return (
    <>
      <NextSeo title="Home" />
      <div className="py-4 container space-y-12">
        <div className="flex flex-col space-y-4 md:flex-row-reverse md:items-center">
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
            <div className="mb-8">
              <h1 className="mb-2 font-bold text-primary">Tal Ohana</h1>
              <h2>
                Software Engineer at{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary underline"
                >
                  Lorem
                </a>
              </h2>
            </div>
            <h4 className="text-gray-700 dark:text-gray-300">
              I am a JavaScript, TypeScript and Software Engineering enthusiast!
            </h4>
          </div>
        </div>
        <hr />
        <div className="space-y-8">
          <h2 className="underline decoration-primary underline-offset-2">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 gap-8">{cards}</div>
          <Link href="/blog">
            <a className="block text-xl text-primary underline">
              Read All Posts <AiOutlineArrowRight className="inline-block" />
            </a>
          </Link>
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
