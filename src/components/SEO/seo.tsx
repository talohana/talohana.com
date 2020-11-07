import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Site } from '../../types';
import { OpenGraph } from './open-graph';
import { Twitter } from './twitter';

type Props = {
  title?: string | null;
  image?: string | null;
  description?: string | null;
  article?: boolean;
};

export const SEO: React.FC<Props> = ({
  title,
  description,
  image,
  article,
}) => {
  const { site } = useStaticQuery<{ site: Site }>(query);
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
        url={siteUrl}
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

SEO.defaultProps = {
  article: false,
};
