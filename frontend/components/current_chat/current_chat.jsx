import React from 'react';
import MessageDisplay from './message_display';

const ChatHeader = ({ channel }) => (
  <div className='chat-header'>
    <h2>#{channel.name}</h2>
  </div>
);

class CurrentChat extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='current-chat'>
        <ChatHeader channel={ channel }/>
        <MessageDisplay channel={ channel }/>
      </div>
    );
  }
}

export default CurrentChat;
