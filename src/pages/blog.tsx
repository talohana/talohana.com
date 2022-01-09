import { PostCard } from '@/components/blog/post-card';
import { getPostsFrontmatter } from '@/lib/mdx';
import { Frontmatter } from '@/types/frontmatter';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';

interface Props {
  posts: Frontmatter[];
}

const Blog: React.VFC<Props> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');

  const cards = posts
    .filter(({ title, tags }) => {
      const titleIncludes = title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const tagsIncludes = tags.some(tag =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      );

      return titleIncludes || tagsIncludes;
    })
    .map(post => <PostCard key={post.slug} frontmatter={post} />);

  return (
    <>
      <NextSeo title="Blog" />
      <div className="space-y-8">
        <input
          type="text"
          aria-label="Search posts"
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Search posts"
          className="my-4"
        />
        <div>
          <h1 className="mb-4 underline decoration-primary decoration-offset-2">
            All Posts
          </h1>
          <div className="grid grid-cols-1 gap-8">{cards}</div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPostsFrontmatter();

  return {
    props: { posts },
  };
};

export default Blog;
