import { AllArticlesQuery, Article } from '@models/generated';
import { client } from './client';
import { QUERY_ALL_ARTICLES } from './documents/article';

export const getAllArticles = async (): Promise<Article[]> => {
  const { data } = await client
    .query<AllArticlesQuery>(QUERY_ALL_ARTICLES)
    .toPromise();

  return (
    (data?.articles?.data
      .filter(Boolean)
      .map(({ attributes }) => attributes)
      .filter(Boolean) as Article[]) ?? []
  );
};
