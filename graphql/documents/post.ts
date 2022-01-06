import { gql } from 'urql';

export const QUERY_RECENT_POSTS = gql`
  query RecentPosts($limit: Int = 5) {
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
