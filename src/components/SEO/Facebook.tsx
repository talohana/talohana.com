import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  locale: string;
  url: string;
  title: string;
  type: string;
  description: string;
  image: string;
}

export const Facebook: React.FC<Props> = ({
  locale,
  url,
  type,
  title,
  description,
  image,
}) => {
  return (
    <Helmet>
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
    </Helmet>
  );
};

Facebook.defaultProps = {
  type: 'website',
};
