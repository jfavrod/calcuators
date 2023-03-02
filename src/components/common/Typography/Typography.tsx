import { JSX, ParentComponent } from 'solid-js';
import { TypographyVariant } from './types';
import { theme } from '../../../theme';

export interface TypographyProps {
  style?: JSX.CSSProperties;
  variant?: TypographyVariant;
}

export const Typography: ParentComponent<TypographyProps> = (props) => {
  const { children, style, variant } = props;

  return (
    <span style={{ ...getStyle(variant), ...style}}>
      {children}
    </span>
  );
};

const getStyle = (variant?: TypographyVariant): JSX.CSSProperties => {
  const base: JSX.CSSProperties = {
    'font-family': 'Roboto'
  };

  if (variant === 'h2') {
    base.color = theme().primaryHeading,
    base['display'] = 'block';
    base['margin-bottom'] = '0.5rem';
    base['font-size'] = '1.25rem';
    base['font-weight'] = 'bold';
  }

  return base;
};
