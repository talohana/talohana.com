import { getAllArticles } from '@graphql/article';
import { Article } from '@models/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface Props {}

const Article: React.VFC<Props> = () => {
  return <div></div>;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts = await getAllArticles();
  const slugs = posts.map(({ slug }) => slug);

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  return {
    props: {},
  };
};

export default Article;
