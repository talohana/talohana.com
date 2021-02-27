import { Maybe, Site } from '@models';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { OpenGraph } from './open-graph';
import { Twitter } from './twitter';

type Props = {
  title?: Maybe<string>;
  image?: Maybe<string>;
  description?: Maybe<string>;
  blogSlug?: Maybe<string>;
  article?: boolean;
};

type PureProps = Props & { site: Site };

export const PureSEO: React.FC<PureProps> = ({
  title,
  description,
  image,
  article,
  site,
  blogSlug,
}) => {
  const {
    defaultTitle,
    titleTemplate,
    image: defaultImage,
    description: defaultDescription,
    siteUrl,
    twitter,
    lang,
  } = site.siteMetadata;

  const metaImage = `${siteUrl}${image || defaultImage}`;
  const metaDescription = description || defaultDescription;
  const url = blogSlug ? `${siteUrl}${blogSlug}` : siteUrl;

  return (
    <>
      <Helmet
        defaultTitle={defaultTitle || ''}
        titleTemplate={titleTemplate || ''}
      >
        {title && <title>{title}</title>}
        {lang && <html lang={lang} />}
        {metaImage && <meta name="image" content={metaImage} />}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Helmet>
      <OpenGraph
        url={url}
        title={title}
        description={metaDescription}
        image={metaImage}
        article={article}
      />
      <Twitter
        twitter={twitter}
        title={title}
        description={metaDescription}
        image={metaImage}
      />
    </>
  );
};

export const SEO: React.FC<Props> = props => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          defaultTitle
          titleTemplate
          description
          image
          lang
          siteUrl
          twitter
        }
      }
    }
  `;

  const data = useStaticQuery<{ site: Site }>(query);

  return <PureSEO {...data} {...props} />;
};

SEO.defaultProps = {
  article: false,
};
