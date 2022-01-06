import { RecentArticles } from '@components/sections';
import { getAllArticles } from '@graphql/article';
import { Article } from '@models/generated';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  articles: Article[];
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <RecentArticles articles={articles} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await getAllArticles();

  return {
    props: {
      articles: articles.slice(0, 3),
    },
  };
};
