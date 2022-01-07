import { Post } from '.contentlayer/types';
import { H3 } from '@components/common';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  post: Post;
}

export const PostCard: React.VFC<Props> = ({ post }) => {
  const publishedAtFormatted = format(parseISO(post.publishedAt), 'PP');

  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <article className="flex flex-col space-y-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              title={post.imageCaption}
              layout="fill"
            />
          </div>
          <div>
            <span className="text-gray-700 dark:text-gray-500">
              {publishedAtFormatted}
            </span>
            <H3>{post.title}</H3>
            <p className="text-gray-700 dark:text-gray-500">{post.summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};
