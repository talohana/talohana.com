import { Maybe, Mdx } from '@models';
import { graphql, PageProps } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import tw from 'twin.macro';
import { Banner } from '../components/blog/banner';
import { FurtherReading } from '../components/blog/further-reading';
import { HorizontalRule } from '../components/blog/horizontal-rule';
import { Container } from '../components/common/container';
import { Layout } from '../components/common/layout';
import { SEO } from '../components/SEO/seo';

type PageData = {
  mdx: Mdx;
  nextPost: Maybe<Mdx>;
  prevPost: Maybe<Mdx>;
};

type Props = PageProps<PageData>;

const PostInfo = tw.div`text-center`;

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
        // prettier-ignore
        image={getSrc((banner as unknown) as FileNode)}
        blogSlug={slug}
        isBlogPost
        datePublished={date}
      />
      <Container>
        <PostInfo>
          <h1>{title}</h1>
          <h4 tw="uppercase">{date}</h4>
        </PostInfo>
        <Banner
          banner={banner}
          bannerAlt={title}
          bannerCredit={bannerCredit}
          bannerCreditUrl={bannerCreditUrl}
        />
        <MDXRenderer>{body}</MDXRenderer>
        <HorizontalRule />
        <FurtherReading prevPost={prevPost} nextPost={nextPost} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  fragment FurtherReadingPreview on Mdx {
    fields {
      title
      description
      slug
      banner {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }

  query GetPost($id: String!, $nextId: String, $prevId: String) {
    mdx(id: { eq: $id }) {
      fields {
        slug
        date(formatString: "MMM DD, YYYY")
        title
        description
        categories
        banner {
          childImageSharp {
            gatsbyImageData
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
