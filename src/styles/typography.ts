import { css } from 'styled-components';
import tw from 'twin.macro';

export const typography = css`
  html {
    font-size: 18px;
    ${tw`text-base md:text-lg leading-normal antialiased font-sans`}
  }

  body {
    ${tw`text-black bg-white dark:text-white dark:bg-black transition-colors`}
  }

  ::selection {
    ${tw`text-white bg-primary-400`}
  }

  a {
    ${tw`inline-block text-primary font-bold no-underline hover:underline`}

    &.anchor {
      ${tw`w-4 h-4`}

      &.before {
        ${tw`top-1/2 p-0 transform -translate-x-full -translate-y-1/2`}
      }

      svg {
        ${tw`w-full h-full`}
      }
    }
  }

  a,
  button {
    ${tw`focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-light`}
  }

  blockquote > p {
    ${tw`mb-0`}
  }

  pre,
  p {
    ${tw`my-2`}
  }

  h1 {
    ${tw`text-3xl my-3`}
  }

  h2 {
    ${tw`text-2xl my-3`}
  }

  h3 {
    ${tw`text-xl my-2`}
  }

  h4 {
    ${tw`text-lg my-2`}
  }

  h5 {
    ${tw`text-base my-2`}
  }

  h6 {
    ${tw`text-sm`}
  }

  table {
    ${tw`my-2`}
  }

  td,
  th {
    ${tw`text-left border-solid border-b border-black dark:border-white px-4 py-3 border-opacity-20`}
  }
`;
