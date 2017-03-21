import React from 'react';
import ChannelMessage from './channel_message';

class ChannelMessages extends React.Component {

  messagesList() {
    if (this.props.channel.messages) {
      return this.props.channel.messages.map( (m, idx) => (
        <ChannelMessage message={m} idx={idx} key={`msg-${idx}`}/>
      ));
    } else {
      return undefined;
    }
  }
  render(){
    return (
      <div className='channel-messages'>
        <ul>
          {this.messagesList()}
        </ul>
      </div>
    );
  }
}

export default ChannelMessages;
