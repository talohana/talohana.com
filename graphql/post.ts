import { Post, PreviewPostsQuery } from '@models/generated';
import { client } from './client';
import { QUERY_PREVIEW_POSTS } from './documents/post';

export const getPreviewPosts = async (): Promise<Post[]> => {
  const { data } = await client
    .query<PreviewPostsQuery>(QUERY_PREVIEW_POSTS)
    .toPromise();

  return (
    (data?.posts?.data.map(postEntity => postEntity.attributes) as Post[]) ?? []
  );
};
