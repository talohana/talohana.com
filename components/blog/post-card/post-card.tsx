import { Post } from '.contentlayer/types';
import { H3 } from '@components/common';
import { format, parseISO } from 'date-fns';
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
          {/* <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              quality={50}
              title={post.imageCaption}
              layout="fill"
            />
          </div> */}
          <H3>{post.title}</H3>
          <div className="text-gray-700 dark:text-gray-500">
            <span>{publishedAtFormatted}</span>
            <p>{post.summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};
