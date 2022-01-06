import { allPosts } from '.contentlayer/data';
import type { Post as PostType } from '.contentlayer/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';

interface Props {
  post: PostType;
}

const Post: React.VFC<Props> = ({ post }) => {
  const Tag = useMDXComponent(post.body.code);

  return (
    <article className="prose dark:prose-invert mx-auto md:prose-xl">
      <Tag />
    </article>
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
