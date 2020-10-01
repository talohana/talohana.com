import { useContext } from 'react';
import { ConfigContext } from '../config/config';

export function useConfig() {
  const config = useContext(ConfigContext);

  return config;
}
