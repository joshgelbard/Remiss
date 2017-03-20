import React from 'react';

const ChannelIndexItem = ({ channel, onClick }) => {
  return(
    <li className='browse-channels-row' onClick={onClick}>
      <div><span className='channel-name'># {channel.name}</span></div>
      <div><span className='creation-info'>Created by {channel.creator} on {channel.created_at}</span></div>
      <div><span className='purpose'>{channel.purpose}</span></div>
      {/*<span className='members-count'>{channel.members.length}</span>*/}
    </li>
  );
};

export default ChannelIndexItem;
