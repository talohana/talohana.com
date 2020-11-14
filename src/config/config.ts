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
  scroll: {
    duration: 700,
    smooth: true,
  },
  website: {
    defaultTitle: 'Tal Ohana',
    titleTemplate: '%s | Tal Ohana',
    description: 'Tal Ohana, a software engineer from Israel.',
    image: '/images/banner.png',
    lang: 'en',
    siteUrl: 'https://talohana.com',
  },
};

export type Config = {
  social: SocialConfig;
  header: HeaderConfig;
  scroll: ScrollConfig;
  website: WebsiteConfig;
};

export type SocialConfig = {
  twitter: string;
  linkedIn: string;
  github: string;
  email: string;
};

export type ScrollConfig = {
  duration: number;
  smooth: boolean;
};

export type HeaderConfig = {
  hideThresholdPx: number;
};

export type WebsiteConfig = {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  image: string;
  lang: string;
  siteUrl: string;
};
