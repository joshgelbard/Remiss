import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { login, logout } from './actions/session_actions';
import Root from './components/root.jsx';

const windowFunctions = { login, logout };

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={ store }/> , root);
  Object.assign(window, windowFunctions, { store });
});
