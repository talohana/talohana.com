import { components } from '@/components/blog';
import { getPostBySlug, getPostsFrontmatter } from '@/lib/mdx';
import type { Post as PostType } from '@/types';
import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

interface Props {
  post: PostType;
}

const Post: React.VFC<Props> = ({ post: { frontmatter, code } }) => {
  const Component = React.useMemo(
    () => getMDXComponent(code, { components }),
    [code]
  );
  const publishedAtFormatted = format(parseISO(frontmatter.publishedAt), 'PP');

  return (
    <>
      <article className="prose dark:prose-invert mx-auto md:prose-lg">
        <h1 className="text-3xl">{frontmatter.title}</h1>
        <span>{publishedAtFormatted}</span>
        <p>{frontmatter.summary}</p>
        <div className="relative block w-full aspect-[4/3]">
          <Image
            src={frontmatter.image}
            title={frontmatter.imageCaption}
            alt={frontmatter.imageAlt}
            layout="fill"
            className="rounded-lg"
          />
        </div>

        <Component />
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  // TODO: pick only slug from frontmatter
  const posts = await getPostsFrontmatter();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  const post = await getPostBySlug(params?.slug ?? '');

  return {
    props: {
      post,
    },
  };
};

export default Post;
