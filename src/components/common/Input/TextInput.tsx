import { Component, JSX } from 'solid-js';
import { InputProps } from './InputProps';

export interface TextInputProps extends InputProps {
  value?: string;
}

export const TextInput: Component<TextInputProps> = (props) => (
  <input
    onFocus={props.onFocus}
    onInput={props.onInput}
    style={style}
    value={props.value}
  />
);

const style: JSX.CSSProperties = {
  "border-radius": '0.25rem',
  padding: '0.5rem',
};
