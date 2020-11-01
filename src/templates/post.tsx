import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { Banner } from '../components/blog/banner';
import { FurtherReading } from '../components/blog/further-reading';
import { Container } from '../components/common/container';
import { Layout } from '../components/common/layout';
import { SEO } from '../components/SEO/seo';
import { Mdx } from '../types';

type PageData = {
  mdx: Mdx;
  nextPost: Mdx | null;
  prevPost: Mdx | null;
};

type Props = PageProps<PageData>;

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { nextPost, prevPost } = data;
  const { body, fields } = data.mdx;
  const {
    title,
    date,
    banner,
    bannerCredit,
    bannerCreditUrl,
    description,
  } = fields;
  const bannerImage = banner?.childImageSharp?.fluid as FluidObject; // gatsbyjs#12149

  return (
    <Layout customSEO>
      <SEO
        title={title}
        description={description}
        image={bannerImage.src}
        article
      />
      <Container>
        <PostInfo>
          <PostTitle>{title}</PostTitle>
          <PublishInfo>{date} - by Tal Ohana</PublishInfo>
        </PostInfo>
        {bannerImage && (
          <Banner
            fluid={bannerImage}
            credit={bannerCredit}
            creditUrl={bannerCreditUrl}
          />
        )}
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
        keywords
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
