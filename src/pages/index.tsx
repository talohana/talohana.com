import React from 'react';
import { Element } from 'react-scroll';
import { Layout } from '../components/common/Layout';
import { Hero } from '../components/landing/Hero';
import { SEO } from '../components/SEO/SEO';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Element name="hero">
        <Hero />
      </Element>
    </Layout>
  );
};

export default IndexPage;
