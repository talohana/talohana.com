import React from 'react';
import { Element } from 'react-scroll';
import { Layout } from '../components/common/Layout';
import { Hero } from '../components/landing/Hero';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Element name="hero">
        <Hero />
      </Element>
    </Layout>
  );
};

export default IndexPage;
