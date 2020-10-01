import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        transition: all 0.5s linear;
    }
`;
