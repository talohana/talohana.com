import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  type?: string;
  username: string | null;
  title: string;
  description: string;
  image: string;
}

export const Twitter: React.FC<Props> = ({
  type,
  username,
  title,
  description,
  image,
}) => {
  return (
    <Helmet>
      {username && <meta name="twitter:creator" content={username} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
    </Helmet>
  );
};

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
};
