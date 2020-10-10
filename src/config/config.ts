export const config: Config = {
  medium: {
    url: 'https://medium.com',
  },
  header: {
    hideThresholdPx: 100,
  },
  scroll: {
    duration: 700,
    smooth: true,
  },
  website: {
    siteUrl: 'https://talohana.com/',
    defaultTitle: 'Tal Ohana',
    defaultDescription: 'Tal Ohana, a Software Developer from Israel.',
    defaultBanner: '/images/banner.png',
    headline: 'TODO:',
    siteLanguage: 'TODO:',
    ogLanguage: 'TODO:',
    author: '@talohana',
    twitter: 'https://twitter.com/talohanax',
    twitterUsername: '@talohanax',
  },
};

export interface Config {
  medium: MediumConfig;
  header: HeaderConfig;
  scroll: ScrollConfig;
  website: WebsiteConfig;
}

export interface ScrollConfig {
  duration: number;
  smooth: boolean;
}

export interface HeaderConfig {
  hideThresholdPx: number;
}

export interface MediumConfig {
  url: string;
}

export interface WebsiteConfig {
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultBanner: string;
  headline: string;
  siteLanguage: string;
  ogLanguage: string;
  author: string;
  twitter: string;
  twitterUsername: string;
}
