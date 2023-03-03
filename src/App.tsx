import type { Component, JSX } from 'solid-js';
import { PercentChange } from './components/calculators/PercentChange';
import { theme } from './theme'
import { Sidebar, ThemeChanger } from 'components/template';

const App: Component = () => {
  return (
    <div style={{ ...container, 'background': theme().primaryBackground }}>
      <div style={{ position: 'absolute', top: '1rem', left: '96%' }}>
        <ThemeChanger />
      </div>

      <Sidebar />

      <div style={content}>
        <div style={comp}>
          <PercentChange />
        </div>
      </div>
    </div>
  );
};

const container: JSX.CSSProperties = {
  height: '100%',
  left: 0,
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
};

const content: JSX.CSSProperties = {
  "align-items": 'center',
  display: 'flex',
  "flex-direction": 'column',
  height: '100%',
  "justify-content": 'center',
  width: '100%',
};

const comp: JSX.CSSProperties = {
  border: '1px solid gray',
  "border-radius": '10px',
  width: '500px',
};

export default App;
