import React from 'react';
import ChatHeader from '../chat_header/chat_header';
import ChatBody from '../chat_body/chat_body';

class CurrentChat extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='current-chat'>
        <ChatHeader channel={ channel }/>
        <ChatBody channel={ channel }/>
      </div>
    );
  }
}

export default CurrentChat;
