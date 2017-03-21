import React from 'react';
import MessageDisplay from '../message_display/message_display';
import ChannelDetail from '../channel_detail/channel_detail';

class ChatBody extends React.Component {
  render(){
    return (
      <div className='chat-body'>
        <MessageDisplay />
        <ChannelDetail />
      </div>
    );
  }
}

export default ChatBody;
