import { format, parseISO } from 'date-fns';
import React from 'react';

interface Props {
  publishedAt: string;
  className?: string;
}

export const PublishedAt: React.VFC<Props> = ({ publishedAt, className }) => {
  const formatted = format(parseISO(publishedAt), 'PP');

  return <span className={className}>{formatted}</span>;
};
