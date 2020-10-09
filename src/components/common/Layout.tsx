import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { SEO } from '../SEO/SEO';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <PrismLanguageChips />
      <PrismTheme />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const GlobalStyles = createGlobalStyle`
    html {
      font-size: 137.5%; /* 22px */

      ${media.lessThan('medium')`
        font-size: 112.5%; /* 18px */
      `}
    }

    body {
      background-color: var(--color-background);
      color: var(--color-text);
      padding-top: 3rem;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;

      &:hover {
        color: inherit;
      }
    }
`;

const PrismLanguageChips = createGlobalStyle`
  /* Code blocks */
  pre[class*='language-'] {
    padding: 2em 1em;
    margin: 1.38rem 0;
    overflow: auto;
  }

  pre[class*='language-'] {
    /* General language chip */
    &::before {
      position: absolute;
      top: 0;
      left: 1.5rem;
      padding: 0.1rem 0.2rem;
      border-radius: 0 0 4px 4px;
      color: ${props => props.theme.white};
      text-transform: uppercase;
      font-size: 0.8rem;
    }
  }

    /* Language chips */
  .gatsby-highlight {
    position: relative;
    font-size: 0.8rem;
  }
  
  pre.language {
    &-ts::before {
      content: 'ts';
      background-color: #3178c6;
    }

    &-text::before {
      content: 'text';
      background-color: #535c68;
    }
  }
`;

const PrismTheme = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #eee;
    background: #2f2f2f;
    font-family: Roboto Mono, monospace;
    font-size: 1em;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #363636;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #363636;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #c792ea;
  }

  .token.attr-name {
    color: #ffcb6b;
  }

  .token.attr-value {
    color: #a5e844;
  }

  .token.attribute {
    color: #a5e844;
  }

  .token.boolean {
    color: #c792ea;
  }

  .token.builtin {
    color: #ffcb6b;
  }

  .token.cdata {
    color: #80cbc4;
  }

  .token.char {
    color: #80cbc4;
  }

  .token.class {
    color: #ffcb6b;
  }

  .token.class-name {
    color: #f2ff00;
  }

  .token.comment {
    color: #616161;
  }

  .token.constant {
    color: #c792ea;
  }

  .token.deleted {
    color: #ff6666;
  }

  .token.doctype {
    color: #616161;
  }

  .token.entity {
    color: #ff6666;
  }

  .token.function {
    color: #c792ea;
  }

  .token.hexcode {
    color: #f2ff00;
  }

  .token.id {
    color: #c792ea;
    font-weight: bold;
  }

  .token.important {
    color: #c792ea;
    font-weight: bold;
  }

  .token.inserted {
    color: #80cbc4;
  }

  .token.keyword {
    color: #c792ea;
  }

  .token.number {
    color: #fd9170;
  }

  .token.operator {
    color: #89ddff;
  }

  .token.prolog {
    color: #616161;
  }

  .token.property {
    color: #80cbc4;
  }

  .token.pseudo-class {
    color: #a5e844;
  }

  .token.pseudo-element {
    color: #a5e844;
  }

  .token.punctuation {
    color: #89ddff;
  }

  .token.regex {
    color: #f2ff00;
  }

  .token.selector {
    color: #ff6666;
  }

  .token.string {
    color: #a5e844;
  }

  .token.symbol {
    color: #c792ea;
  }

  .token.tag {
    color: #ff6666;
  }

  .token.unit {
    color: #fd9170;
  }

  .token.url {
    color: #ff6666;
  }

  .token.variable {
    color: #ff6666;
  }
`;
