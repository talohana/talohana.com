import { H3 } from '@components/common';
import { getStrapiMedia } from '@lib/api';
import { Article } from '@models/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  article: Article;
  className?: string;
}

const PostPreviewImage: React.VFC<Pick<Article, 'image'>> = ({ image }) => {
  if (!image?.data?.attributes) {
    return null;
  }

  const src = getStrapiMedia(image.data.attributes);
  const alt = image.data.attributes.alternativeText ?? '';

  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  );
};

const PostPreviewPublishedAt: React.VFC<Pick<Article, 'publishedAt'>> = ({
  publishedAt,
}) => {
  if (!publishedAt) {
    return null;
  }

  const formatted = format(parseISO(publishedAt), 'PP');

  return <span>{formatted}</span>;
};

export const ArticleCard: React.VFC<Props> = ({ article }) => {
  const { slug, title, description, publishedAt, image } = article;

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="flex flex-col space-y-2">
          <PostPreviewImage image={image} />
          <div>
            <PostPreviewPublishedAt publishedAt={publishedAt} />
            <H3 className="underline decoration-primary-700 ">{title}</H3>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};
