import { withRouter } from 'react-router';
import React from 'react';

const ChannelsIndexItem = (props) => {
  const {key, channel, router, selected, currentUser} = props;
  const changeUrl = () => router.push(`messages/${channel.name}`);
  let className = 'channels-index-item';
  if (selected) {
    className += '-selected';
  }
  if (channel.channel_type === 'CHANNEL') {
    return (
      <li className={className} onClick={changeUrl} key={key}>
        <p># {channel.name}</p>
      </li>
    );
  } else {
    const otherUser = channel.members[0].id === currentUser.id ? channel.members[1] : channel.members[0];
    return (
      <li className={className} onClick={changeUrl} key={key}>
        <p>{otherUser.username}</p>
      </li>
    );
  }
};

export default withRouter(ChannelsIndexItem);
