import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { login } from '../actions/session_actions';
import App from './app';
// import AuthFormContainer from './auth_form/auth_form_container';

const Root = ({store}) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;


  // <Route path='/signup' component={ AuthFormContainer } />
  // <Route path='/signin' component={ AuthFormContainer } />
