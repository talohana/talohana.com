import { H3 } from '@components/common';
import { getStrapiMedia } from '@lib/api';
import { Post } from '@models/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  post: Post;
  className?: string;
}

const PostPreviewImage: React.VFC<Pick<Post, 'image'>> = ({ image }) => {
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

const PostPreviewCreatedAt: React.VFC<Pick<Post, 'createdAt'>> = ({
  createdAt,
}) => {
  if (!createdAt) {
    return null;
  }

  const formatted = format(parseISO(createdAt), 'PP');

  return <span>{formatted}</span>;
};

export const PostPreview: React.VFC<Props> = ({ post }) => {
  const { slug, title, description, createdAt, image } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="flex flex-col space-y-2">
          <PostPreviewImage image={image} />
          <div>
            <PostPreviewCreatedAt createdAt={createdAt} />
            <H3>{title}</H3>
            <p>{description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};
