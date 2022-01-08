import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { PostCard } from '@components/blog/post-card/post-card';
import { compareDesc, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';

interface Props {
  posts: Post[];
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
    .map(post => <PostCard key={post._id} post={post} />);

  return (
    <div>
      <input
        type="text"
        aria-label="Search posts"
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search posts"
        className="my-4"
      />
      <div className="grid grid-cols-1 gap-8">{cards}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = [...allPosts];
  posts.sort((a, b) =>
    compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
