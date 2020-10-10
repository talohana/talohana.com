import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { Banner } from '../components/blog/Banner';
import { Container } from '../components/blog/Container';
import { Layout } from '../components/common/Layout';

type PostFrontmatter = {
  slug: 'string';
  date: string;
  title: string;
  description: string;
  categories: string[];
  keywords: string[];
  banner: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

type PageData = {
  mdx: {
    body: string;
    frontmatter: PostFrontmatter;
  };
};

type Props = PageProps<PageData>;

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, date, banner } = frontmatter;

  return (
    <Layout>
      <Container>
        <PostInfo>
          <h1>{title}</h1>
          <PostDate>{date} - by Tal Ohana</PostDate>
        </PostInfo>
        <Banner fluid={banner.childImageSharp.fluid}></Banner>
        <MDXRenderer children={body}></MDXRenderer>
      </Container>
    </Layout>
  );
};

const PostInfo = styled.div`
  text-align: center;
`;

const PostDate = styled.h4`
  font-weight: 200;
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
