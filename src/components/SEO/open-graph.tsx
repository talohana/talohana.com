import { Maybe } from '@models';
import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  url?: Maybe<string>;
  title?: Maybe<string>;
  description?: Maybe<string>;
  image?: Maybe<string>;
  isBlogPost?: boolean;
};

export const OpenGraph: React.FC<Props> = ({
  url,
  title,
  description,
  isBlogPost,
  image,
}) => {
  return (
    <Helmet>
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
    </Helmet>
  );
};
