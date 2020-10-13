import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import notFound from '../assets/illustrations/404.svg';
import { Container } from '../components/common/Container';
import { Layout } from '../components/common/Layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Wrapper>
      <Container>
        <img src={notFound} alt="404 Illustration" />
        <h1>Oh S#!t!</h1>
        <p>
          The page you are looking for was moved, removed or might never
          existed!
        </p>
        <div>
          Let's go back <HomeLink to="/">home</HomeLink>
        </div>
      </Container>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
`;

const HomeLink = styled(Link)`
  text-decoration: underline;
`;

export default NotFoundPage;
