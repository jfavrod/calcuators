import { Component, JSX } from 'solid-js';
import lightbulb from 'assets/icons/lightbulb.svg';
import lightbulbFilled from 'assets/icons/lightbulb-filled.svg';
import { theme, setTheme } from 'theme';


export const ThemeChanger: Component = () => {
  const onClick = () => {
    theme().variant === 'dark'
      ? setTheme('light')
      : setTheme('dark');
  };

  return (
    <span onClick={onClick} style={container}>
      <img alt='' src={theme().variant === 'dark' ? lightbulb : lightbulbFilled } width={20} />
    </span>
  );
};

const container: JSX.CSSProperties = {
  right: '1.5rem',
  position: 'absolute',
  top: '1rem',
};
