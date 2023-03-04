import { JSX, ParentComponent } from 'solid-js';
import { TypographyVariant } from './types';
import { palette, theme } from '../../../theme';

export interface TypographyProps {
  style?: JSX.CSSProperties;
  variant?: TypographyVariant;
}

export const Typography: ParentComponent<TypographyProps> = (props) => (
  <span style={{ ...getStyle(props.variant), ...props.style}}>
    {props.children}
  </span>
);

const getStyle = (variant?: TypographyVariant): JSX.CSSProperties => {
  const currentTheme = theme();

  const base: JSX.CSSProperties = {
    'font-family': 'Roboto'
  };

  if (variant && variant.charAt(0) === 'h') {
    base.color = currentTheme.primaryHeading,
    base['display'] = 'block';
    base['font-weight'] = 'bold';
    base['margin-bottom'] = '0.5rem';
  }

  if (variant === 'h2') {
    base['font-size'] = '1.25rem';
  } else if (variant === 'h3') {
    base['font-size'] = '1.20rem';
  } else if (currentTheme.variant === 'dark') {
    base.color = palette.white;
  }

  return base;
};
