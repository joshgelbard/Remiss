import React from 'react';

const ChannelMessage = (props) => {
  const {message} = props;
  return (
    <li className='channel-message'>
      {message.username} says: {message.body}
    </li>
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
