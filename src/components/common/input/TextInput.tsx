import { Component, JSX } from 'solid-js';
import { InputProps } from './InputProps';

export interface TextInputProps extends InputProps {
  value?: string;
}

export const TextInput: Component<TextInputProps> = (props) => (
  <input
    onFocus={(e) => props.onFocus && props.onFocus(e)}
    onInput={(e) => props.onInput && props.onInput(e)}
    style={style}
    value={props.value}
  />
);

const style: JSX.CSSProperties = {
  'border-radius': '0.25rem',
  'font-family': 'Roboto',
  'font-size': '1rem',
  padding: '0.5rem',
};
