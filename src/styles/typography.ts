import { css } from 'styled-components';
import tw from 'twin.macro';

export const typography = css`
  html {
    ${tw`antialiased text-base lg:text-lg font-sans`}
  }

  body {
    ${tw`text-black bg-white dark:text-white dark:bg-black`}
  }

  ::selection {
    ${tw`text-white bg-primary-400`}
  }

  a {
    ${tw`inline-block text-primary font-bold no-underline hover:underline`}
  }

  a,
  button {
    ${tw`focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-opacity-70`}
  }

  blockquote > p {
    ${tw`mb-0`}
  }

  pre {
    ${tw`mb-4`}
  }

  p {
    ${tw`text-lg mb-4`}
  }

  h1 {
    ${tw`text-2xl mb-6`}
  }

  h2 {
    ${tw`text-xl mb-6`}
  }

  h3 {
    ${tw`text-lg mb-4`}
  }

  h4 {
    ${tw`text-base mb-3`}
  }

  h5 {
    ${tw`text-sm mb-2`}
  }

  h6 {
    ${tw`text-xs`}
  }

  table {
    ${tw`mb-4`}
  }

  td,
  th {
    ${tw`text-left border-solid border-b border-black dark:border-white px-4 py-3 border-opacity-20`}
  }
`;
