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
};

export interface Config {
  medium: MediumConfig;
  header: HeaderConfig;
  scroll: ScrollConfig;
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
