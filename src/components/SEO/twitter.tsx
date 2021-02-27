import { Maybe } from '@models';
import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  twitter?: Maybe<string>;
  title?: Maybe<string>;
  description?: Maybe<string>;
  image?: Maybe<string>;
};

export const Twitter: React.FC<Props> = ({
  twitter,
  title,
  description,
  image,
}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
