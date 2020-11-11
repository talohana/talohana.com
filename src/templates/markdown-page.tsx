import { MdxFrontmatter } from '@types';
import { PageProps } from 'gatsby';
import React from 'react';
import { Container } from '../components/common/container';
import { Layout } from '../components/common/layout';
import { SEO } from '../components/SEO/seo';

type Props = PageProps<unknown, { frontmatter: MdxFrontmatter }>;

const MarkdownPage: React.FC<Props> = ({ pageContext, children }) => {
  const { title } = pageContext.frontmatter;

  return (
    <Layout customSEO>
      <SEO title={title} />
      <Container>{children}</Container>
    </Layout>
  );
};

export default MarkdownPage;
