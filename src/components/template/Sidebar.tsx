import { Component, createSignal, JSX } from 'solid-js'
import { theme } from 'theme';
import './template.css';

export const Sidebar: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <div style={getStyle()}>
      <div onClick={() => setIsOpen(true)} style={{ position: 'absolute'}}>{'>>'}</div>
      <div class='sidebar-anim' style={{ ...container, width: (isOpen() ? '300px': '0')}}>
        <div style={{ 'background-color': 'yellow', position: 'absolute', height: '100%', width: '300px' }}>
          <span onClick={() => setIsOpen(false)}>{'<<'}</span>
          <p>inside inside inside</p>
        </div>
      </div>
    </div>
  );
};

const container: JSX.CSSProperties = {
  height: '100%',
  position: 'absolute',
  overflow: 'hidden',
  width: 0,
};

const getStyle = (): JSX.CSSProperties => {
  const currentTheme = theme();
  const style: JSX.CSSProperties = {
    'border-color': currentTheme.secondaryBackground,
    'border-right-style': 'solid',
    'border-width': '1px',
    'background-color': currentTheme.primaryBackground,
  };

  return style;
};