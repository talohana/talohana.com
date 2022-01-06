import { gql } from 'urql';

export const QUERY_ALL_ARTICLES = gql`
  query AllArticles {
    articles(sort: "publishedAt:desc") {
      data {
        attributes {
          slug
          title
          description
          publishedAt
          image {
            data {
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
          content
        }
      }
    }
  }
`;
