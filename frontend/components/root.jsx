import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import MessagesPlaceholder from './messages_placeholder';
import NewChannelFormContainer from './channels/new_channel_form_container';
import BrowseChannelsFormContainer from './channels/browse_channels_form_container';

const Root = ({store}) => {

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/signin');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages');
    }
  };

  const _indexRedirect = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages');
    } else {
      replace('/signin');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute onEnter={ _indexRedirect } />
          <Route path= '/messages' component={ MessagesPlaceholder } onEnter={ _redirectUnlessLoggedIn } />
          <Route path='/signup' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path='/signin' component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }  />
          <Route path='/new-channel' component={ NewChannelFormContainer } onEnter={ _redirectUnlessLoggedIn } />
          <Route path='/browse-channels' component={ BrowseChannelsFormContainer } onEnter={ _redirectUnlessLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
