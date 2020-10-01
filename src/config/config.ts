import React from 'react';

export interface Config {
  medium: {
    url: string;
  };
  header: {
    hideThresholdPx: number;
  };
  scroll: {
    duration: number;
  };
}

export const defaultConfig: Config = {
  medium: {
    url: 'https://medium.com',
  },
  header: {
    hideThresholdPx: 100,
  },
  scroll: {
    duration: 700,
  },
};

export const ConfigContext = React.createContext<Config>(defaultConfig);
