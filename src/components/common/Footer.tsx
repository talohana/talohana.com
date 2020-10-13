import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Copy>
        &copy; All rights reserved {new Date().getFullYear()} | Tal Ohana
      </Copy>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  height: 10vh;
`;

const Copy = styled.div`
  margin-bottom: 0;
`;
