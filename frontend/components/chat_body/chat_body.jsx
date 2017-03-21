import React from 'react';
import MessageDisplay from '../message_display/message_display';
import ChannelDetail from '../channel_detail/channel_detail';

class ChatBody extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='chat-body'>
        <MessageDisplay channel={channel}/>
        <ChannelDetail channel={channel}/>
      </div>
    );
  }
}

export default ChatBody;
