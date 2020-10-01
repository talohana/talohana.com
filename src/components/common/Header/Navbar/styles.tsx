import styled from 'styled-components';
import { Link } from 'react-scroll';
import media from 'styled-media-query';

export const Wrapper = styled.nav<{ visible: boolean }>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 0 2rem;
  position: fixed;
  top: ${props => (props.visible ? 0 : '-3.5rem')};
  left: 0;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  transition: top 0.3s;

  ${media.lessThan('large')`
    padding: 0 0.5rem;
  `}
`;

export const Brand = styled(Link)`
  margin-right: 1rem;
  width: 2rem;
  display: flex;
  align-items: center;

  img {
    margin-bottom: 0;
  }
`;
