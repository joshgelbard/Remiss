import React from 'react';

const ChannelIndexItem = ({ channel, onClick }) => (
  <li onClick={onClick}>{ channel.name }</li>
);

export default ChannelIndexItem;
