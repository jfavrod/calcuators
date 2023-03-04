import { Calculator } from 'components/calculators';
import calculators from 'components/calculators';
import { Component, createSignal, For, JSX } from 'solid-js';
import { theme } from 'theme';
import './template.css';

export interface SidebarProps {
  onCalculatorClick: (calc: Calculator) => unknown;
}

export const Sidebar: Component<SidebarProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const closeIconClicked = () => {
    console.log('close');
    setIsOpen(false);
  };

  return (
    <div style={getWrapperStyle()}>
      <div onClick={() => setIsOpen(!isOpen())} style={actuator}>
        <i class='fa-bars fa-solid' />
      </div>

      <div class='sidebar-anim' style={getContainerStyle(isOpen())}>
        <div style={getTopAreaStyle()}>
          <div onClick={closeIconClicked} style={closeIcon}>
            <i class='fa-xmark fa-solid' style={{ color: theme().primaryBackground }} />
          </div>
        </div>

        <div style={contents}>
          <For each={calculators}>{(calc) => (
            <div style={menuItem} onClick={() => {
              props.onCalculatorClick(calc);
              setIsOpen(false);
            }}>
              {calc.title}
            </div>
          )}
          </For>
        </div>
      </div>
    </div>
  );
};

const actuator: JSX.CSSProperties = {
  position: 'absolute',
  left: '0.5rem',
  top: '0.5rem',
};

const closeIcon: JSX.CSSProperties = {
  height: '1rem',
  float: 'right',
  'margin-right': '0.5rem',
  'margin-top': '0.5rem',
  width: '1rem',
};

const container: JSX.CSSProperties = {
  height: '100%',
  position: 'absolute',
  overflow: 'hidden',
  width: 0,
};

const contents: JSX.CSSProperties = {
  height: '100%',
  position: 'absolute',
  width: '300px',
};

const menuItem: JSX.CSSProperties = {
  border: '1px solid black',
  padding: '1.5rem',
};

const topArea: JSX.CSSProperties = {
  height: '3.5rem',
};

const getContainerStyle = (isOpen: boolean): JSX.CSSProperties => {
  const currentTheme = theme();
  return {
    ...container,
    'background-color': currentTheme.primaryBackground,
    'border-right-color': currentTheme.secondaryBackground,
    'border-right-style': 'solid',
    'border-right-width': '1px',
    width: (isOpen ? '300px': '0'),
  };
};

const getWrapperStyle = (): JSX.CSSProperties => {
  const currentTheme = theme();
  const style: JSX.CSSProperties = {
    'background-color': currentTheme.primaryBackground,
  };

  return style;
};

const getTopAreaStyle = (): JSX.CSSProperties => {
  return {
    ...topArea,
    'background-color': theme().secondaryBackground,
  };
};
