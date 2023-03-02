import { createSignal } from 'solid-js';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

const [ currentTheme, setCurrentTheme ] = createSignal(lightTheme);

export const theme = currentTheme;

export const setTheme = (variant: 'dark' | 'light') => {
  if (variant === 'dark') {
    setCurrentTheme(darkTheme);
  } else {
    setCurrentTheme(lightTheme);
  }
};
