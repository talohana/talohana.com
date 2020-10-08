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
  seo: {
    defaultTitle: 'Tal Ohana',
    defaultDescription: 'Tal Ohana, a Software Developer from Israel.',
    author: '@talohana',
    thumbnail: '/images/thumbnail.png',
    url: 'https://talohana.com',
  },
  social: {
    twitter: 'https://twitter.com/talohanax',
    twitterUsername: '@talohanax',
  },
};

export interface Config {
  medium: MediumConfig;
  header: HeaderConfig;
  scroll: ScrollConfig;
  seo: SEOConfig;
  social: SocialConfig;
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

export interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  author: string;
  thumbnail: string;
  url: string;
}

export interface SocialConfig {
  twitter: string;
  twitterUsername: string;
}
