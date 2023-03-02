import { JSX, ParentComponent } from 'solid-js';
import { ButtonVariant } from './types';
import { palette, theme } from 'theme'

export interface ButtonProps {
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  value?: string;
  /** Default `primary`. */
  variant?: ButtonVariant;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={getStyle(props.variant)}
    >
      {props.value || props.children}
    </button>
  );
};

const getStyle = (variant?: ButtonVariant): JSX.CSSProperties => {
  const base: JSX.CSSProperties = {
    "border-radius": '0.25rem',
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
  } else if (variant === 'success') {
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
  } else if (variant === 'success') {
    base['background-color'] = palette.green;
    base['border-color'] = palette.green;
  } else if (variant === 'warning') {
    base['background-color'] = palette.orange;
    base['border-color'] = palette.orange;
  } 
};
