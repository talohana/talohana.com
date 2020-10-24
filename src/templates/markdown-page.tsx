import { PageProps } from 'gatsby';
import React from 'react';
import { Container } from '../components/common/Container';
import { SEO } from '../components/SEO/SEO';
import { MdxFrontmatter } from '../types';

type Props = PageProps<unknown, { frontmatter: MdxFrontmatter }>;

const MarkdownPage: React.FC<Props> = ({ pageContext, children }) => {
  const { title } = pageContext.frontmatter;

  return (
    <>
      <SEO title={title} />
      <Container>{children}</Container>
    </>
  );
};

export default MarkdownPage;
