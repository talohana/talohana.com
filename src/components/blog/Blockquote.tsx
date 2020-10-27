import styled from 'styled-components';

export const Blockquote = styled.blockquote`
  margin: 0;
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
  border-left: 4px solid ${props => props.theme.primary};
`;
