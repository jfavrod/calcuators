import { JSX } from 'solid-js/jsx-runtime';

export interface InputProps {
  onFocus?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
  onInput?: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>;
}
