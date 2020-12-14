import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../components/common/container';
import { Layout } from '../components/common/layout';
import { SEO } from '../components/SEO/seo';
import notFound from '../images/404.svg';

const NotFoundPage: React.FC = () => (
  <Layout customSEO>
    <SEO title="404" />
    <Wrapper>
      <Container>
        <img src={notFound} alt="404 Illustration" />
        <h1>Oh S#!t!</h1>
        <p>
          The page you are looking for was moved, removed or might never
          existed!
        </p>
        <div>
          Let&apos;s go back <Link to="/">home</Link>
        </div>
      </Container>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center text-center`}
`;

export default NotFoundPage;
