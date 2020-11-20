import React from 'react';
import styled from 'styled-components';

export const Table: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.table`
  display: block;
  overflow-x: scroll;
`;
