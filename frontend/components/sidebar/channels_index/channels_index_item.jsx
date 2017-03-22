import { withRouter } from 'react-router';
import React from 'react';

const ChannelsIndexItem = (props) => {
  const {key, channel, router, selected} = props;
  const changeUrl = () => router.push(`messages/${channel.name}`);
  let className = 'channels-index-item';
  if (selected) {
    className += '-selected';
  }
  return (
    <li className={className} onClick={changeUrl} key={key}>
      <p># {channel.name}</p>
    </li>
  );
};

export default withRouter(ChannelsIndexItem);
