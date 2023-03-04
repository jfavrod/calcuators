import { Component } from 'solid-js';
import { PercentChange } from './PercentChange';

export type Calculator = {
  Component: Component;
  title: string;
}

export default [
  { title: 'Percent Change', Component: PercentChange },
] as Calculator[];
