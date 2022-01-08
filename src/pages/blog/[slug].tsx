import { PublishedAt } from '@/components/blog/published-at';
import { siteUrl } from '@/lib/constants';
import { getPostBySlug, getPostsFrontmatter } from '@/lib/mdx';
import type { Post as PostType } from '@/types/post';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';

interface Props {
  post: PostType;
}

const Post: React.VFC<Props> = ({ post: { frontmatter, code } }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const router = useRouter();
  const { title, publishedAt, image, imageCaption, imageAlt, summary, tags } =
    frontmatter;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={`${siteUrl}${router.asPath}`}
        openGraph={{
          title,
          description: summary,
          url: `${siteUrl}${router.asPath}`,
          type: 'article',
          images: [
            {
              url: `${siteUrl}${image}`,
              alt: imageAlt,
            },
          ],
          article: {
            publishedTime: publishedAt,
            authors: [siteUrl],
            tags,
          },
        }}
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
