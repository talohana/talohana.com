import React from 'react';
import tw from 'twin.macro';

const Wrapper = tw.table`block overflow-x-auto`;

export const Table: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;
