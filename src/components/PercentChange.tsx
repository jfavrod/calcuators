import { Component, createSignal, JSX } from 'solid-js';
import { Styles } from '../types';
import { TextInput, Typography } from './common';

export const PercentChange: Component = () => {
  const [startValue, setStartValue] = createSignal<number>(0);
  const [endValue, setEndValue] = createSignal<number>(0);

  const onFocus = (event: FocusEvent & { currentTarget: HTMLInputElement; target: Element;}) => {
    if (Number(event.currentTarget.value) === 0)  {
      event.currentTarget.value = '';
    }
  };

  return (
    <div style={styles.container}>
      <Typography variant='h2'>
        Percent Change
      </Typography>

      <div style={inputs}>
        <div style={{ display: 'flex'}}>
          <Typography style={label}>Start Value</Typography>
          <Typography style={label}>End Value</Typography>
        </div>

        <div style={{ display: 'flex' }}>
          <TextInput
            onFocus={onFocus}
            onInput={(e) => setStartValue(Number(e.currentTarget.value))}
            value={startValue().toString()}
          />

          <TextInput
            onFocus={onFocus}
            onInput={(e) => setEndValue(Number(e.currentTarget.value))}
            value={endValue().toString()}
          />
        </div>
      </div>

      <Typography>
        Change: {Math.round( ((endValue() || 0) - (startValue() || 0)) / (startValue() || 1) * 100 )}%
      </Typography>
    </div>
  )
};

const styles: Styles  = {
  container: {
    display: 'flex',
    flex: 1,
    'flex-direction': 'column',
    padding: '1.5rem',
  },
};

const label: JSX.CSSProperties = {
  flex: 1,
  "font-family": 'Roboto'
}

const inputs: JSX.CSSProperties = {
  display: 'flex',
  'flex-direction': 'column',
  'margin-bottom': '1rem',
  'margin-left': 'auto',
  'margin-right': 'auto',
}
