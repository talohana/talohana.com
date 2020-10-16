import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Site } from '../../types';

type Props = {
  title?: string;
  image?: string;
  description?: string;
  article?: boolean;
};

export const SEO: React.FC<Props> = ({ title, description, image }) => {
  const { site } = useStaticQuery<{ site: Site }>(query);
  const {
    defaultTitle,
    titleTemplate,
    image: defaultImage,
    description: defaultDescription,
    lang,
  } = site.siteMetadata;

  const metaImage = image ?? defaultImage;
  const metaDescription = description ?? defaultDescription;

  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
      {title && <title>{title}</title>}

      <html lang={lang} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
    </Helmet>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
      }
    }
  }
`;

SEO.defaultProps = {
  article: false,
};
