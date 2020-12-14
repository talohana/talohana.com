import React from 'react';
import tw from 'twin.macro';

export const Table: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = tw.table`block overflow-x-auto`;
