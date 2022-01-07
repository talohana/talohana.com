import { allPosts } from '.contentlayer/data';
import type { Post as PostType } from '.contentlayer/types';
import { components } from '@components/blog';
import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import React from 'react';

interface Props {
  post: PostType;
}

const Post: React.VFC<Props> = ({ post }) => {
  const Tag = useMDXComponent(post.body.code);
  const publishedAtFormatted = format(parseISO(post.publishedAt), 'PP');

  return (
    <>
      <article className="prose dark:prose-invert mx-auto md:prose-lg">
        <h1 className="text-3xl">{post.title}</h1>
        <span>{publishedAtFormatted}</span>
        <p>{post.summary}</p>
        <div className="relative block w-full aspect-[4/3]">
          <Image
            src={post.image}
            title={post.imageCaption}
            alt={post.imageAlt}
            layout="fill"
            className="rounded-lg"
          />
        </div>

        <Tag components={components} />
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = ({
  params,
}) => {
  const post = allPosts.find(({ slug }) => slug === params?.slug) as PostType;

  return {
    props: {
      post,
    },
  };
};

export default Post;
