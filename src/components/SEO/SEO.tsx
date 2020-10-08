import React from 'react';
import { Helmet } from 'react-helmet';
import { config } from '../../config';

interface Props {
  description?: string;
  title?: string;
}

export const SEO: React.FC<Props> = ({
  title = config.seo.defaultTitle,
  description = config.seo.defaultDescription,
}) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta
        name="image"
        content={`${config.seo.url}/${config.seo.thumbnail}`}
      />

      <meta property="og:url" content={config.seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${config.seo.url}/${config.seo.thumbnail}`}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.social.twitter} />
      <meta name="twitter:site" content={config.social.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image:src"
        content={`${config.seo.url}/${config.seo.thumbnail}`}
      />

      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
