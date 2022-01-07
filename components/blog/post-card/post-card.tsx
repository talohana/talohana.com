import { Post } from '.contentlayer/types';
import { Badge } from '@components/common/badge';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
interface Props {
  post: Post;
}

export const PostCard: React.VFC<Props> = ({ post }) => {
  const publishedAtFormatted = format(parseISO(post.publishedAt), 'PP');
  const badges = post.tags.map(tag => <Badge key={tag}>{tag}</Badge>);

  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <article className="flex flex-col space-y-2">
          <h3 className="text-xl">{post.title}</h3>
          <div className="text-gray-700 dark:text-gray-500">
            <span>{publishedAtFormatted}</span>
            <p>{post.summary}</p>
          </div>
          <div className="flex space-x-2 flex-wrap">{badges}</div>
        </article>
      </a>
    </Link>
  );
};
