import React from 'react';
import ChannelMessages from '../channel_messages/channel_messages';
import Compose from '../compose/compose';

class MessageDisplay extends React.Component {
  render(){
    return (
      <div className='message-display'>
        <ChannelMessages />
        <Compose />
      </div>
    );
  }
}

export default MessageDisplay;
