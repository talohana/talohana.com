import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface GetSite {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      keywords: string[];
    };
  };
}

interface Props {
  description?: string;
  title?: string;
}

export const SEO: React.FC<Props> = ({ description, title }) => {
  const { site } = useStaticQuery<GetSite>(query);

  const metaTitle = title ?? site.siteMetadata.title;
  const metaDescription = description ?? site.siteMetadata.description;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords.join(',')} />
    </Helmet>
  );
};

const query = graphql`
  query GetSite {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`;
