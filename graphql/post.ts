import { Post, RecentPostsQuery } from '@models/generated';
import { client } from './client';
import { QUERY_RECENT_POSTS } from './documents/post';

export const getRecentPosts = async (): Promise<Post[]> => {
  const { data } = await client
    .query<RecentPostsQuery>(QUERY_RECENT_POSTS)
    .toPromise();

  return (
    (data?.posts?.data.map(postEntity => postEntity.attributes) as Post[]) ?? []
  );
};
