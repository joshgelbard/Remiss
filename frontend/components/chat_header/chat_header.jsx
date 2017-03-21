import React from 'react';

class ChatHeader extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='chat-header'>
        <h2>#{channel.name}</h2>
      </div>
    );
  }
}

export default ChatHeader;
