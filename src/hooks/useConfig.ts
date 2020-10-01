import { useContext } from 'react';
import { Config, ConfigContext } from '../config/config';

export function useConfig(): Config {
  const config = useContext(ConfigContext);

  return config;
}
