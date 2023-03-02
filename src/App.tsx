import type { Component, JSX } from 'solid-js';
import { PercentChange } from './components/PercentChange';
import { theme, setTheme } from './theme'

const App: Component = () => {
  return (
    <div style={{ ...container, 'background': theme().primaryBackground }}>
      <div style={comp}>
        <PercentChange />
      </div>

      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
};

const container: JSX.CSSProperties = {
  "align-items": 'center',
  display: 'flex',
  flex: 1,
  "flex-direction": 'column',
  height: '100%',
  "justify-content": 'center',
  left: 0,
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
};

const comp: JSX.CSSProperties = {
  border: '1px solid gray',
  "border-radius": '10px',
  width: '500px',
}

export default App;
