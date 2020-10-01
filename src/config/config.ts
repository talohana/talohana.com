import { Config } from '../models/Config.model';
import React from 'react';

export const defaultConfig: Config = {
  medium: {
    url: 'https://medium.com',
  },
};

export const ConfigContext = React.createContext<Config>(defaultConfig);
