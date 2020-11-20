import { Maybe, Mdx } from '@types';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { Banner } from '../components/blog/banner';
import { FurtherReading } from '../components/blog/further-reading';
import { Container } from '../components/common/container';
import { Layout } from '../components/common/layout';
import { SEO } from '../components/SEO/seo';

type PageData = {
  mdx: Mdx;
  nextPost: Maybe<Mdx>;
  prevPost: Maybe<Mdx>;
};

type Props = PageProps<PageData>;

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { nextPost, prevPost } = data;
  const { body, fields } = data.mdx;

  if (!fields) {
    return null;
  }

  const {
    title,
    date,
    banner,
    bannerCredit,
    bannerCreditUrl,
    description,
    slug,
  } = fields;

  return (
    <Layout customSEO>
      <SEO
        title={title}
        description={description}
        image={banner?.childImageSharp?.fluid?.src}
        blogSlug={slug}
        article
      />
      <Container>
        <PostInfo>
          <PostTitle>{title}</PostTitle>
          <PublishInfo>{date} - by Tal Ohana</PublishInfo>
        </PostInfo>
        <Banner
          banner={banner}
          bannerAlt={title}
          bannerCredit={bannerCredit}
          bannerCreditUrl={bannerCreditUrl}
        />
        <MDXRenderer children={body} />
        <hr />
        <FurtherReading prevPost={prevPost} nextPost={nextPost} />
      </Container>
    </Layout>
  );
};

const PostTitle = styled.h1`
  font-weight: 300;
`;

const PostInfo = styled.div`
  text-align: center;
`;

const PublishInfo = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
`;

export const query = graphql`
  fragment FurtherReadingPreview on Mdx {
    fields {
      title
      description
      slug
      banner {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }

  query GetPost($id: String!, $nextId: String, $prevId: String) {
    mdx(id: { eq: $id }) {
      fields {
        slug
        date(formatString: "DD MMM, YYYY")
        title
        description
        categories
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerCredit
        bannerCreditUrl
      }
      body
    }
    nextPost: mdx(id: { eq: $nextId }) {
      ...FurtherReadingPreview
    }
    prevPost: mdx(id: { eq: $prevId }) {
      ...FurtherReadingPreview
    }
  }
`;

export default PostTemplate;
