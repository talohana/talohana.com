import { Link } from 'react-scroll';
import styled from 'styled-components';

export const ScrollLink = styled(Link)`
  color: ${props => props.theme.white};
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.white};
    border-bottom: 1px solid currentColor;
  }
`;
