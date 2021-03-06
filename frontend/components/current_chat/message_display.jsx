import React from 'react';
import ChannelMessages from './channel_messages';
import ComposeContainer from './compose/compose_container';

class MessageDisplay extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='chat-body'>
        <ChannelMessages channel={channel}/>
        <ComposeContainer />
      </div>
    );
  }
}

export default MessageDisplay;
