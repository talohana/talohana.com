import { Frontmatter } from '@/types/frontmatter';
import Link from 'next/link';
import React from 'react';
import { PostTags } from './post-tags';
import { PublishedAt } from './published-at';
interface Props {
  frontmatter: Frontmatter;
}

export const PostCard: React.FC<Props> = ({ frontmatter }) => {
  const { slug, title, summary, tags, publishedAt, readTime } = frontmatter;

  return (
    (<Link href={`/blog/${slug}`}>

      <article className="flex flex-col gap-1.5">
        <h4>{title}</h4>
        <div className="flex gap-1 font-light">
          <PublishedAt publishedAt={publishedAt} className="inline-block" />
          <span>/</span>
          <span className="inline-block">{readTime.text}</span>
        </div>
        <p>{summary}</p>
        <PostTags tags={tags} />
      </article>

    </Link>)
  );
};
