import { Badge } from '@/components/common/badge';
import { Frontmatter } from '@/types/frontmatter';
import Link from 'next/link';
import React from 'react';
interface Props {
  frontmatter: Frontmatter;
}

export const PostCard: React.VFC<Props> = ({ frontmatter }) => {
  const { slug, title, summary, publishedAt, tags } = frontmatter;
  const badges = tags.map(tag => <Badge key={tag}>{tag}</Badge>);

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="flex flex-col space-y-2">
          <h4>{title}</h4>
          <p>{summary}</p>
          <div className="flex space-x-2 flex-wrap">{badges}</div>
        </article>
      </a>
    </Link>
  );
};
