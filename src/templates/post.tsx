import { Maybe, Mdx } from '@models';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { HorizontalRule } from 'src/components/blog/horizontal-rule';
import tw from 'twin.macro';
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
        image={banner?.childImageSharp?.fluid?.src}
        blogSlug={slug}
        article
      />
      <Container>
        <PostInfo>
          <h1>{title}</h1>
          <h4 tw="uppercase">{date} - by Tal Ohana</h4>
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
          fluid {
            ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFluid_withWebp
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
