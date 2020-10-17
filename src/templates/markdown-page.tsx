import { PageProps } from 'gatsby';
import React from 'react';
import { Container } from '../components/common/Container';
import { Layout } from '../components/common/Layout';
import { SEO } from '../components/SEO/SEO';
import { MdxFrontmatter } from '../types';

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
