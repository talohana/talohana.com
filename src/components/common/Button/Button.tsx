import styled from 'styled-components';
import { darken } from 'polished';
export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props => darken('0.15', props.theme.primary)};
  }
`;
