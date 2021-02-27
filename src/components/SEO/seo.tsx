import { Maybe, Site } from '@models';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { OpenGraph } from './open-graph';
import { SchemaOrg } from './schema-org';
import { Twitter } from './twitter';

type Props = {
  title?: Maybe<string>;
  image?: Maybe<string>;
  description?: Maybe<string>;
  isBlogPost?: boolean;
  blogSlug?: Maybe<string>;
  datePublished?: Maybe<string>;
};

type PureProps = Props & { site: Site };

export const PureSEO: React.FC<PureProps> = ({
  title,
  description,
  image,
  isBlogPost = false,
  site,
  blogSlug,
  datePublished,
}) => {
  const {
    defaultTitle,
    titleTemplate,
    image: defaultImage,
    description: defaultDescription,
    siteUrl,
    twitter,
    lang,
    author,
    organization,
  } = site.siteMetadata;

  const metaImage = `${siteUrl}${image ?? defaultImage}`;
  const metaDescription = description ?? defaultDescription;
  const url = blogSlug ? `${siteUrl}${blogSlug}` : siteUrl;

  return (
    <>
      <Helmet
        defaultTitle={defaultTitle ?? ''}
        titleTemplate={titleTemplate ?? ''}
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
        isBlogPost={isBlogPost}
      />
      <Twitter
        twitter={twitter}
        title={title}
        description={metaDescription}
        image={metaImage}
      />
      <SchemaOrg
        url={url}
        title={title ?? defaultTitle}
        defaultTitle={defaultTitle}
        isBlogPost={isBlogPost}
        image={metaImage}
        canonicalUrl={siteUrl}
        author={author}
        description={description}
        organization={organization}
        datePublished={datePublished}
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
          author
          organization {
            name
            logo
            url
          }
        }
      }
    }
  `;

  const data = useStaticQuery<{ site: Site }>(query);

  return <PureSEO {...data} {...props} />;
};
