import { Component, JSX } from 'solid-js';
import { theme } from 'theme';

export interface CloseIconProps {
  onClick?: () => unknown;
  style?: JSX.CSSProperties;
}

export const CloseIcon: Component<CloseIconProps> = (props) => (
  <span onClick={() => props.onClick && props.onClick()} style={getStyle(props.style)}>
    <i class='fa-solid fa-xmark' />
  </span>
);

const baseStyle: JSX.CSSProperties = {
  height: '1.5rem',
  width: '1.5rem',
};

const getStyle = (overrides?: JSX.CSSProperties): JSX.CSSProperties => {
  const style = {
    ...baseStyle,
    color: theme().secondaryBackground,
  };

  return { ...style, ...overrides };
};
