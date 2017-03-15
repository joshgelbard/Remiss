import React from 'react';
import ReactDOM from 'react-dom';
import { signup } from './actions/user_actions';
import { login, logout } from './actions/session_actions';
import configureStore from './store/store.js';
const windowFunctions = { login, logout, signup };

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Hello, world!</h1>, root);
  Object.assign(window, windowFunctions, { store: store });
});
