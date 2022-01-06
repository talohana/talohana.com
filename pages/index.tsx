import { RecentPosts } from '@components/sections';
import { getRecentPosts } from '@graphql/post';
import { Post } from '@models/generated';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  recentPosts: Post[];
};

const Home: NextPage<Props> = ({ recentPosts }) => {
  return (
    <>
      <RecentPosts posts={recentPosts} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recentPosts = await getRecentPosts();

  return {
    props: { recentPosts },
  };
};
