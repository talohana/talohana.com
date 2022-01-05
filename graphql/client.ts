import { getStrapiURL } from '@lib/api';
import { Client, createClient } from 'urql';

export const client: Client = createClient({
  url: getStrapiURL('graphql'),
});
