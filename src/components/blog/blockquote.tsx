import styled from 'styled-components';
import tw from 'twin.macro';

export const Blockquote = styled.blockquote`
  ${tw`border-solid border-0 border-l-4 border-primary my-4 mx-0 p-2`}

  p {
    ${tw`m-0`}
  }
`;
