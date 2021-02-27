export const config: Config = {
  social: {
    twitter: 'https://twitter.com/talohanax',
    linkedIn: 'https://www.linkedin.com/in/talohana/',
    github: 'https://github.com/talohana',
    email: 'tal.ohana.x@gmail.com',
  },
  header: {
    hideThresholdPx: 100,
  },
  seo: {
    defaultTitle: 'Tal Ohana',
    titleTemplate: '%s | Tal Ohana',
    description: 'Tal Ohana, a software engineer from Israel.',
    image: '/images/banner.png',
    lang: 'en',
    siteUrl: 'https://talohana.com',
    author: 'Tal Ohana',
  },
};

export type Config = {
  social: SocialConfig;
  header: HeaderConfig;
  seo: SEOConfig;
};

export type SocialConfig = {
  twitter: string;
  linkedIn: string;
  github: string;
  email: string;
};

export type HeaderConfig = {
  hideThresholdPx: number;
};

export type SEOConfig = {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  image: string;
  lang: string;
  siteUrl: string;
  author: string;
};
