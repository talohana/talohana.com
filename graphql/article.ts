import { gql } from 'graphql-request';

export const QUERY_ARTCILES_SLUGS = gql`
  query QueryArticleSlugs {
    articles {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
