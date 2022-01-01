import { getSdk } from '@models/generated';
import { getGraphQLClient } from './api';

const client = getGraphQLClient();
const sdk = getSdk(client);

export async function getArticlesSlugs(): Promise<string[]> {
  const response = await sdk.QueryArticleSlugs();

  return (
    response.articles?.data.map(({ attributes }) => attributes?.slug ?? '') ??
    []
  );
}
