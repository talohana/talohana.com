import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  url?: string | null;
  title?: string | null;
  description?: string | null;
  image?: string | null;
  article?: boolean;
};

export const OpenGraph: React.FC<Props> = ({
  url,
  title,
  description,
  article,
  image,
}) => {
  return (
    <Helmet>
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content={article ? 'article' : 'website'} />
    </Helmet>
  );
};

OpenGraph.defaultProps = {
  article: false,
};
