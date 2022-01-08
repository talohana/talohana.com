import { PublishedAt } from '@/components/blog/published-at';
import { Seo } from '@/components/seo';
import { getPostBySlug, getPostsFrontmatter } from '@/lib/mdx';
import type { Post as PostType } from '@/types/post';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

interface Props {
  post: PostType;
}

const Post: React.VFC<Props> = ({ post: { frontmatter, code } }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const { title, publishedAt, image, imageCaption, imageAlt, summary, tags } =
    frontmatter;

  return (
    <>
      <Seo
        title={title}
        description={summary}
        image={image}
        article={{ tags, publishedTime: publishedAt }}
      />
      <article className="prose dark:prose-invert mx-auto md:prose-lg">
        <h1 className="text-3xl">{title}</h1>
        <PublishedAt publishedAt={publishedAt} />
        <p>{summary}</p>
        <div className="relative block w-full aspect-[4/3]">
          <Image
            src={image}
            title={imageCaption}
            alt={imageAlt}
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
