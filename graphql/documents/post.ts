import { gql } from 'urql';

export const QUERY_PREVIEW_POSTS = gql`
  query PreviewPosts($limit: Int = 5) {
    posts(sort: "createdAt:desc", pagination: { limit: $limit }) {
      data {
        attributes {
          slug
          title
          description
          createdAt
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
