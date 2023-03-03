import { Component } from 'solid-js';
import lightbulb from 'assets/icons/lightbulb.svg';
import lightbulbFilled from 'assets/icons/lightbulb-filled.svg';
import { theme, setTheme } from 'theme';


export const ThemeChanger: Component = () => (
  <span onClick={() => {
    theme().variant === 'dark'
      ? setTheme('light')
      : setTheme('dark');
  }}>
    <img alt='' src={theme().variant === 'dark' ? lightbulb : lightbulbFilled } width={20} />
  </span>
);
