/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './fonts.css';

import 'assets/icons/fontawesome-free/js/fontawesome.min.js';
import 'assets/icons/fontawesome-free/js/solid.min.js';

import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}


render(() => <App />, root as HTMLElement);
