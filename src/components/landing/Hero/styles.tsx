import styled from 'styled-components';
import media from 'styled-media-query';
import { Container } from '../../common/Container/Container';

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Details = styled.div`
  margin-bottom: 2.5rem;
  margin-right: 2rem;

  ${media.lessThan('large')`
    margin-right: 0;
  `}
`;

export const Thumbnail = styled.div`
  flex: 1;
`;
