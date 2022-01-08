import { NextSeo } from 'next-seo';
import { OpenGraphArticle } from 'next-seo/lib/types';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

interface Props {
  title: string;
  path?: string;
  description?: string;
  image?: string;
  article?: OpenGraphArticle;
}

export const Seo: React.VFC<Props> = ({
  title,
  description,
  image,
  article = {},
}) => {
  const router = useRouter();

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: `https://talohana.com/${router.asPath}`,
        images: [
          {
            url: `https://talohana.com/${image}`,
          },
        ],
        article: {
          authors: ['Tal Ohana'],
          ...article,
        },
      }}
    />
  );
};
