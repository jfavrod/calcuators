import { JSX, ParentComponent } from 'solid-js';
import { ButtonMouseEvent, ButtonVariant } from './types';
import { palette, theme } from 'theme';

export interface ButtonProps {
  onClick?: (e: ButtonMouseEvent) => unknown;
  value?: string;
  /** Default `primary`. */
  variant?: ButtonVariant;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button
      onClick={(e) => props.onClick && props.onClick(e)}
      style={getStyle(props.variant)}
    >
      {props.value || props.children}
    </button>
  );
};

const getStyle = (variant?: ButtonVariant): JSX.CSSProperties => {
  const base: JSX.CSSProperties = {
    'border-radius': '0.25rem',
    'font-family': 'Inter',
    'font-weight': 'bold',
    'padding-bottom': '0.75rem',
    'padding-left': '2rem',
    'padding-right': '2rem',
    'padding-top': '0.75rem',
  };

  if (variant) {
    const themeVariant = theme().variant;
    if (themeVariant === 'dark') {
      applyDarkVariant(base, variant);
    } else if (themeVariant === 'light') {
      applyLightVariant(base, variant);
    }
  }

  return base;
};

const applyDarkVariant = (base: JSX.CSSProperties, variant?: ButtonVariant) => {
  base['background-color'] = palette.onyx;
  base['border-style'] = 'solid';
  base['border-width'] = '0.2rem';

  if (variant === 'error') {
    base['border-color'] = palette.red;
    base.color = palette.red;
  } else if (variant === 'info') {
    base['border-color'] = palette.lightBlue;
    base.color = palette.lightBlue;
  } else if (variant === 'primary') {
    base['border-color'] = palette.blue;
    base.color = palette.blue;
  } else if (variant === 'secondary') {
    base.color = palette.white;
    base['border-color'] = palette.silver;
  }  else if (variant === 'success') {
    base['border-color'] = palette.green;
    base.color = palette.green;
  } else if (variant === 'warning') {
    base['border-color'] = palette.orange;
    base.color = palette.orange;
  }
};

const applyLightVariant = (base: JSX.CSSProperties, variant?: ButtonVariant) => {
  base.color = palette.white;

  if (variant === 'error') {
    base['background-color'] = palette.red;
    base['border-color'] = palette.red;
  } else if (variant === 'info') {
    base['background-color'] = palette.lightBlue;
    base['border-color'] = palette.lightBlue;
  }  else if (variant === 'primary') {
    base['background-color'] = palette.blue;
    base['border-color'] = palette.blue;
  } else if (variant === 'secondary') {
    base['border-color'] = palette.silver;
    base.color = palette.onyx;
  }  else if (variant === 'success') {
    base['background-color'] = palette.green;
    base['border-color'] = palette.green;
  } else if (variant === 'warning') {
    base['background-color'] = palette.orange;
    base['border-color'] = palette.orange;
  } 
};
