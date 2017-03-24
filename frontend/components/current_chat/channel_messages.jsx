import React from 'react';
import sortBy from 'lodash/sortBy';

const ChannelMessage = (props) => {
  const {message} = props;
  return (
    <div className='channel-message'>
      <div className='message-header'>
        <span className='username'>{message.username}</span>
        <span className='timestamp'>{message.created_at}</span>
      </div>
      <div className='message-body'>
        {message.body}
      </div>
    </div>
  );
};

class ChannelMessages extends React.Component {

  componentDidUpdate() {
    if (this.msgs){
      this.msgs.scrollTop = 99999;
    }
  }

  messagesList() {
    if (this.props.channel.messages) {
      const messages = sortBy(this.props.channel.messages, 'id');
      return messages.map( (m, idx) => (
        <ChannelMessage message={m} key={`msg-${idx}`}/>
      ));
    } else {
      return undefined;
    }
  }
  render(){
    return (
      <div className='channel-messages' ref={ r => {this.msgs = r;} }>
        <ul>
          {this.messagesList()}
        </ul>
      </div>
    );
  }
}

export default ChannelMessages;
