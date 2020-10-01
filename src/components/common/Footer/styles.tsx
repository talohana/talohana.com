import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  height: 10vh;
`;

export const Copy = styled.div`
  margin-bottom: 0;
`;
