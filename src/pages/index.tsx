import { PostCard } from '@/components/blog/post-card';
import { links } from '@/lib/constants';
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

const Company: React.FC = () => (
  <span>
    <span className="underline text-[#4285F4]">G</span>
    <span className="underline text-[#DB4437]">o</span>
    <span className="underline text-[#F4B400]">o</span>
    <span className="underline text-[#4285F4]">g</span>
    <span className="underline text-[#0F9D58]">l</span>
    <span className="underline text-[#DB4437]">e</span>
  </span>
);

const Home: React.FC<Props> = ({ posts }) => {
  const cards = posts.map(post => (
    <PostCard key={post.slug} frontmatter={post} />
  ));

  return (
    <>
      <NextSeo title="Home" />
      <div className="py-4 container space-y-12">
        <div className="flex flex-col space-y-4 md:justify-between md:flex-row-reverse md:items-center">
          <div>
            <Image
              src={me}
              alt="Tal Ohana profile picture"
              width={150}
              height={150}
              className="rounded-full"
              priority
            />
          </div>
          <div>
            <div className="mb-4">
              <h1 className="mb-2 font-bold text-primary">Tal Ohana</h1>
              <h2>
                Software Engineer at{' '}
                <a
                  href={links.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  <Company />
                </a>
              </h2>
            </div>
            <h3 className="text-lg font-light">
              I am a JavaScript, TypeScript and Software Engineering enthusiast!
            </h3>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="underline decoration-primary">Recent Posts</h3>
          <div className="grid grid-cols-1 gap-8">{cards}</div>
          <Link href="/blog">
            <a className="inline-flex items-center text-xl group">
              Read All Posts
              <AiOutlineArrowRight className="transition-transform transform group-hover:translate-x-1" />
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
