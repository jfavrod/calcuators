import type { Component, JSX } from 'solid-js';
import { Button } from './components/common';
import { PercentChange } from './components/PercentChange';
import { theme, setTheme } from './theme'

const App: Component = () => {
  return (
    <div style={{ ...container, 'background': theme().primaryBackground }}>
      <div style={comp}>
        <PercentChange />
      </div>

      <div style={{ display: 'flex' }}>
        <Button onClick={() => setTheme('dark')} variant='warning'>Dark</Button>
        <Button onClick={() => setTheme('light')} variant='error'>Light</Button>
        <Button variant='success' value='success' />
      </div>
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
