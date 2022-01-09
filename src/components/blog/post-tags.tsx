import { Badge } from '@/components/common/badge';
import React from 'react';

interface Props {
  tags: string[];
}

export const PostTags: React.VFC<Props> = ({ tags }) => {
  const badges = tags.map(tag => <Badge key={tag}>{tag}</Badge>);

  return <div className="flex flex-wrap gap-2">{badges}</div>;
};
