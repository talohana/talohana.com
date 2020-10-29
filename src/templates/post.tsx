import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Banner } from '../components/blog/Banner';
import { PostPreview } from '../components/blog/PostPreview';
import { Container } from '../components/common/Container';
import { Layout } from '../components/common/Layout';
import { UppercaseHeading } from '../components/common/UppercaseHeading';
import { SEO } from '../components/SEO/SEO';
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
        <FurtherReading>
          {nextPost && (
            <div>
              <UppercaseHeading as="h3">Continue Reading</UppercaseHeading>
              <PostPreview fields={nextPost.fields} />
            </div>
          )}
          {prevPost && (
            <div>
              <UppercaseHeading as="h3">In Case You Missed It</UppercaseHeading>
              <PostPreview fields={prevPost.fields} />
            </div>
          )}
        </FurtherReading>
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

const FurtherReading = styled.div`
  margin-top: 2rem;

  h3 {
    font-weight: 200;
  }

  & > *:not(:last-child) {
    margin-bottom: 2rem;

    ${media.lessThan('large')`
      margin-bottom: 0;
    `}
  }
`;

export const query = graphql`
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
      ...PostPreview
    }
    prevPost: mdx(id: { eq: $prevId }) {
      ...PostPreview
    }
  }
`;

export default PostTemplate;
