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
    defaultTitle: 'Tal Ohana',
    titleTemplate: '%s | Tal Ohana',
    description: 'Tal Ohana, a Software Developer from Israel.',
    image: '/images/banner.png',
    lang: 'en',
    siteUrl: 'https://talohana.com',
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
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  image: string;
  lang: string;
  siteUrl: string;
}
