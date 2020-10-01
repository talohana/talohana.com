import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  height: 10vh;
`;

export const Copy = styled.div`
  margin-bottom: 0;
`;
