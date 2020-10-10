import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { Banner } from '../components/blog/Banner';
import { Container } from '../components/blog/Container';
import { Layout } from '../components/common/Layout';
import { SEO } from '../components/SEO/SEO';
import { Mdx } from '../types';

type PageData = {
  mdx: Mdx;
};

type Props = PageProps<PageData>;

const PostTemplate: React.FC<Props> = ({ data, location }) => {
  const { body, frontmatter } = data.mdx;
  const { title, date, banner } = frontmatter;
  const bannerImage = banner?.childImageSharp?.fluid as FluidObject; // gatsbyjs#12149

  return (
    <Layout customSEO>
      <SEO pathname={location.pathname} title={title} article />
      <Container>
        <PostInfo>
          <h1>{title}</h1>
          <PublishInfo>{date} - by Tal Ohana</PublishInfo>
        </PostInfo>
        {bannerImage && <Banner fluid={bannerImage} />}
        <MDXRenderer children={body} />
      </Container>
    </Layout>
  );
};

const PostInfo = styled.div`
  text-align: center;
`;

const PublishInfo = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
`;

export const query = graphql`
  query GetPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
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
      }
      body
    }
  }
`;

export default PostTemplate;
