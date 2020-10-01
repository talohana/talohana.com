import styled from 'styled-components';
import media from 'styled-media-query';
import { Container } from '../../common/Container/Container';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  height: 100vh;
`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Details = styled.div`
  margin-right: 2rem;

  ${media.lessThan('large')`
    margin-right: 0;
    margin-bottom: 3rem;
  `}
`;

export const Thumbnail = styled.div`
  flex: 1;
`;
