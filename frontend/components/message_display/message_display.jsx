import React from 'react';
import ChannelMessages from '../channel_messages/channel_messages';
import Compose from '../compose/compose';

class MessageDisplay extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='message-display'>
        <ChannelMessages channel={channel}/>
        <Compose />
      </div>
    );
  }
}

export default MessageDisplay;
