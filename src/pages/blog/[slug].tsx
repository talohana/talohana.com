import { PostTags } from '@/components/blog/post-tags';
import { PublishedAt } from '@/components/blog/published-at';
import { siteUrl } from '@/lib/constants';
import { getPostBySlug, getPostsFrontmatter } from '@/lib/mdx';
import { Frontmatter } from '@/types/frontmatter';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';

interface Props {
  frontmatter: Frontmatter;
  code: string;
}

const Post: React.VFC<Props> = ({ frontmatter, code }) => {
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
      <article className="prose dark:prose-invert mx-auto md:prose-lg space-y-4">
        <header className="space-y-2">
          <h1 className="text-3xl">{title}</h1>
          <PublishedAt publishedAt={publishedAt} />
          <div>{summary}</div>
          <PostTags tags={tags} />
        </header>
        <div className="relative block w-full aspect-[4/3]">
          <Image
            src={image}
            title={imageCaption}
            alt={imageAlt}
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div>
          <Component />
        </div>
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
  const { frontmatter, code } = await getPostBySlug(params?.slug ?? '');

  return {
    props: { frontmatter, code },
  };
};

export default Post;
