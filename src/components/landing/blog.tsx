import { MdxEdge, MdxFields } from '@models';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';
import { PostPreview } from '../blog/post-preview';
import { Container } from '../common/container';

type Props = {
  posts: MdxEdge[];
};

const Posts = tw.div`mb-8 lg:space-y-4`;

const AllPosts = tw.div`uppercase text-2xl mb-4`;

export const Blog: React.FC<Props> = ({ posts }) => {
  const previews = posts.map(({ node }) => (
    <PostPreview key={node.id} post={node.fields as MdxFields} />
  ));

  return (
    <Container as="section">
      <h2>Latest Posts</h2>
      <Posts>{previews}</Posts>
      <AllPosts>
        <Link to="/blog">view all posts</Link>
      </AllPosts>
    </Container>
  );
};
