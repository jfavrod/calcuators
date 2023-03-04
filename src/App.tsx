import { Component, createSignal, For, JSX } from 'solid-js';
import { theme } from './theme';
import { Sidebar, ThemeChanger } from 'components/template';
import { SidebarProps } from 'components/template/Sidebar';
import { Calculator } from 'components/calculators';

const App: Component = () => {
  const [ calculators, setCalculators ] = createSignal<Calculator[]>([]);

  const onCalculatorClick: SidebarProps['onCalculatorClick'] = (calc) => {
    const calcs = [...calculators()];
    const calcIdx = calcs.findIndex((c) => c.title === calc.title);

    if (calcIdx === -1) {
      calcs.push(calc);
      setCalculators(calcs);
    }
  };

  const removeCalc = (title: string) => {
    const calcs = [...calculators()];
    const calcIdx = calcs.findIndex((c) => c.title === title);

    if (calcIdx !== -1) {
      calcs.splice(calcIdx, 1);
      setCalculators(calcs);
    }
  };

  return (
    <div style={{ ...container, 'background': theme().primaryBackground }}>
      <ThemeChanger />
      <Sidebar onCalculatorClick={onCalculatorClick} />

      <div style={content}>
        <For each={calculators()}>{({ Component, title }) => (
          <div style={calc}>
            <div onClick={() => removeCalc(title)}>
              <i class='fa-solid fa-xmark' />
            </div>

            <Component />
          </div>
        )}</For>
      </div>
    </div>
  );
};

const calc: JSX.CSSProperties = {
  'max-width': '30rem'
};

const container: JSX.CSSProperties = {
  height: '100%',
  left: 0,
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
  'z-index': -1,
};

const content: JSX.CSSProperties = {
  'align-items': 'center',
  display: 'flex',
  'flex-direction': 'column',
  height: '100%',
  'justify-content': 'center',
  margin: 'auto auto',
  width: '100%',
};

export default App;
