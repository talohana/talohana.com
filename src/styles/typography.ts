import { css } from 'styled-components';
import tw from 'twin.macro';

export const typography = css`
  html {
    font-size: 18px;
    ${tw`text-base md:text-lg leading-normal antialiased font-sans`}

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

    a {
      ${tw`inline-block text-primary font-bold no-underline hover:underline`}

      &.anchor {
        ${tw`text-current hover:text-primary align-middle`}
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

    table {
      ${tw`my-2`}
    }
  }

  body {
    ${tw`text-black bg-white dark:text-white dark:bg-black transition-colors`}
  }

  ::selection {
    ${tw`text-white bg-primary-400`}
  }

  td,
  th {
    ${tw`text-left border-solid border-b border-black dark:(border-white border-opacity-20) px-4 py-3 border-opacity-20`}
  }
`;
