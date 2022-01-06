import { ArticleCard } from '@components/blog';
import { H2 } from '@components/common';
import { Article } from '@models/generated';
import React from 'react';

interface Props {
  articles: Article[];
}

export const RecentArticles: React.VFC<Props> = ({ articles }) => {
  return (
    <section>
      <H2>Recent Articles</H2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
};
