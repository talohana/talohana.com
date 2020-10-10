import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Facebook } from './Facebook';
import { Twitter } from './Twitter';

interface SiteMetadata {
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultBanner: string;
  headline: string;
  siteLanguage: string;
  ogLanguage: string;
  author: string;
  twitter: string;
  twitterUsername: string;
}

interface Site {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface Props {
  title: string | null;
  description: string | null;
  banner: string | null;
  pathname: string | null;
  article: boolean;
}

export const SEO: React.FC<Props> = ({
  title,
  description,
  banner,
  pathname,
  article,
}) => {
  const { site } = useStaticQuery<Site>(query);

  const {
    siteUrl,
    defaultTitle,
    defaultDescription,
    defaultBanner,
    headline,
    siteLanguage,
    ogLanguage,
    author,
    twitter,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
  };

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Facebook
        description={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        description={seo.description}
        username={twitter}
      />
    </>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        defaultTitle
        defaultDescription
        defaultBanner
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        twitterUsername
      }
    }
  }
`;

SEO.defaultProps = {
  title: null,
  description: null,
  banner: null,
  pathname: null,
  article: false,
};
