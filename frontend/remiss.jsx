import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { login } from './actions/session_actions';
import Root from './components/root.jsx';

const windowFunctions = { login };

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={ store }/> , root);
  Object.assign(window, windowFunctions, { store: store });
});
