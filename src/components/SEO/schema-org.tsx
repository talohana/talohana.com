import { Maybe, SiteSiteMetadataOrganization } from '@models';
import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  isBlogPost: boolean;
  url?: Maybe<string>;
  title?: Maybe<string>;
  defaultTitle?: Maybe<string>;
  image?: Maybe<string>;
  description?: Maybe<string>;
  author?: Maybe<string>;
  canonicalUrl?: Maybe<string>;
  datePublished?: Maybe<string>;
  organization?: Maybe<SiteSiteMetadataOrganization>;
};

export const SchemaOrg = React.memo<Props>(
  ({
    url,
    title,
    defaultTitle,
    isBlogPost,
    image,
    description,
    author,
    canonicalUrl,
    organization,
    datePublished,
  }) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              url: organization?.url,
              logo: {
                '@type': 'ImageObject',
                url: organization?.logo,
              },
              name: organization?.name,
            },
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema;

    return (
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);
