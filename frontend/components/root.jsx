import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { receiveMessage } from '../actions/current_channel_actions';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import NewChannelFormContainer from './channel_forms/new_channel_form_container';
import HomeScreenContainer from './home_screen/home_screen_container';
import BrowseChannelsFormContainer from './channel_forms/browse_channels_form_container';
import ConversationChooserContainer from './channel_forms/conversation_chooser_container';

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
      replace('/signup');
    }
  };

  const _messagesRedirect = (nextState, replace) => {
    replace(`messages/general`);
  };

  const setSocket = (channelName) => {
    if (window.App.channel) {
      window.App.cable.subscriptions.remove(window.App.channel);
    }
    window.App.channel = window.App.cable.subscriptions.create(
      { channel: 'MessagesChannel', channel_name: channelName },
      { connected: () => {},
        disconnected: () => {},
        received: (data) => { store.dispatch(receiveMessage(data.message)); }
      }
    );
  };

  const _enterChannel = (nextState, replace) => {
    setSocket(nextState.params.channelName);
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute onEnter={ _indexRedirect } />
          <Route onEnter={ _redirectIfLoggedIn }>
            <Route path='/signup' component={ AuthFormContainer }/>
            <Route path='/signin' component={ AuthFormContainer }/>
          </Route>
          <Route onEnter={ _redirectUnlessLoggedIn }>
            <Route path='/new-channel' component={ NewChannelFormContainer }/>
            <Route path='/browse-channels' component={ BrowseChannelsFormContainer }/>
            <Route path='/conversations' component={ ConversationChooserContainer }/>
            <Route path='/messages/:channelName' component={ HomeScreenContainer } onEnter={_enterChannel}/>
            <Route path='/messages' onEnter={_messagesRedirect} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
