import { InputFocusEvent } from 'components/common/input/InputProps';
import { Component, createSignal, JSX } from 'solid-js';
import { NumberInput, Typography } from '../common';

export const PercentChange: Component = () => {
  const [startValue, setStartValue] = createSignal<number>(0);
  const [endValue, setEndValue] = createSignal<number>(0);

  const onFocus = (event: InputFocusEvent) => {
    if (Number(event.currentTarget.value) === 0)  {
      event.currentTarget.value = '';
    }
  };

  return (
    <div style={container}>
      <Typography style={{ 'padding-bottom': '0.75rem' }} variant='h2'>
        Percent Change
      </Typography>

      <div style={inputs}>
        <div style={inputGroup}>
          <Typography>Start Value</Typography>
          <NumberInput
            onFocus={onFocus}
            onInput={(e) => setStartValue(Number(e.currentTarget.value))}
            value={startValue().toString()}
          />
        </div>

        <div style={inputGroup}>
          <Typography>End Value</Typography>
          <NumberInput
            onFocus={onFocus}
            onInput={(e) => setEndValue(Number(e.currentTarget.value))}
            value={endValue().toString()}
          />
        </div>
      </div>

      <Typography style={{ 'text-align': 'center' }} variant='h3'>
        Change: {Math.round( ((endValue() || 0) - (startValue() || 0)) / (startValue() || 1) * 100 )}%
      </Typography>
    </div>
  );
};

const container: JSX.CSSProperties ={
  'align-items': 'center',
  display: 'flex',
  'flex-direction': 'column',
  width: '100%'
};

const inputs: JSX.CSSProperties = {
  display: 'grid',
  'grid-template-columns': 'repeat(auto-fill, minmax(260px, 50%))',
  'margin-bottom': '1rem',
  'justify-content': 'center',
  width: '100%',
};

const inputGroup: JSX.CSSProperties = {
  display: 'grid',
  'grid-template-rows': 'auto auto',
};
