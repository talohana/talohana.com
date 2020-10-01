import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }
`;
