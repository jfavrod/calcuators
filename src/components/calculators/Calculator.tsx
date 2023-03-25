import { Typography } from 'components/common';
import { JSX, ParentComponent } from 'solid-js';

export interface CalculatorProps {
  style?: JSX.CSSProperties;
  title: string;
}

export const Calculator: ParentComponent<CalculatorProps> = (props) => (
  <div style={{...container, ...props.style}}>
    <Typography style={titleStyle} variant='h2'>
      {props.title}
    </Typography>

    {props.children}
  </div>
);

const container: JSX.CSSProperties ={
  'align-items': 'center',
  display: 'flex',
  'flex-direction': 'column',
  width: '100%'
};

const titleStyle: JSX.CSSProperties = {
  'padding-bottom': '0.75rem',
};
