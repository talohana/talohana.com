import styled from 'styled-components';
import media from 'styled-media-query';
import { Container } from '../../common/Container/Container';

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 90vh;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  flex: 2;
`;

export const Illustration = styled.div`
  flex: 1;
  margin-right: 2rem;

  ${media.lessThan('large')`
    margin-right:0;
  `}
`;
