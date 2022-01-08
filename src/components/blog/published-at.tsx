import { format, parseISO } from 'date-fns';
import React from 'react';

interface Props {
  publishedAt: string;
}

export const PublishedAt: React.VFC<Props> = ({ publishedAt }) => {
  const formatted = format(parseISO(publishedAt), 'PP');

  return <span>{formatted}</span>;
};
