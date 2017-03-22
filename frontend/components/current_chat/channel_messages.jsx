import React from 'react';

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

  messagesList() {
    if (this.props.channel.messages) {
      return this.props.channel.messages.map( (m, idx) => (
        <ChannelMessage message={m} key={`msg-${idx}`}/>
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
