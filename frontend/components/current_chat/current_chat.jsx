import React from 'react';
import ChatHeader from '../chat_header/chat_header';
import ChatBody from '../chat_body/chat_body';

class CurrentChat extends React.Component {
  render(){
    return (
      <div className='current-chat'>
        <ChatHeader />
        <ChatBody />
      </div>
    );
  }
}

export default CurrentChat;
