export interface Author {
  username: string;
}

export interface Post {
  title: string;
  createdAt: string;
  uniqueSlug: string;
  virtuals: {
    subtitle: string;
  };
  author: Author;
}
