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
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';

interface Props {
  frontmatter: Frontmatter;
  imagePlaceholder: string;
  code: string;
}

const Post: React.VFC<Props> = ({ frontmatter, code, imagePlaceholder }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const router = useRouter();
  const {
    title,
    publishedAt,
    image,
    imageCaption,
    imageAlt,
    summary,
    tags,
    readTime,
  } = frontmatter;

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
          <div className="flex gap-1 font-light">
            <PublishedAt publishedAt={publishedAt} className="inline-block" />
            <span>/</span>
            <span className="inline-block">{readTime.text}</span>
          </div>
          <div>{summary}</div>
          <PostTags tags={tags} />
        </header>
        <div className="relative block w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={image}
            title={imageCaption}
            alt={imageAlt}
            layout="fill"
            placeholder="blur"
            blurDataURL={imagePlaceholder}
            priority
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
  const { base64 } = await getPlaiceholder(frontmatter.image);

  return {
    props: { frontmatter, code, imagePlaceholder: base64 },
  };
};

export default Post;
