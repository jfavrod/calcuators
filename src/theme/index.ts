import { createSignal } from 'solid-js';
import * as colorPalette from './color-palette';
import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';
import { ThemeVariant } from './types';

const [ currentTheme, setCurrentTheme ] = createSignal(lightTheme);

export const palette = colorPalette.palette;

export const theme = currentTheme;

export const setTheme = (variant: ThemeVariant) => {
  if (variant === 'dark') {
    setCurrentTheme(darkTheme);
  } else {
    setCurrentTheme(lightTheme);
  }
};
