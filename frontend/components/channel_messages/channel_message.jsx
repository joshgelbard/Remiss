import React from 'react';

const ChannelMessage = (props) => {
  const {message, idx} = props;
  return (
    <li className='channel-message'>
      {message.username} says: {message.body}
    </li>
  );
};

export default ChannelMessage;
