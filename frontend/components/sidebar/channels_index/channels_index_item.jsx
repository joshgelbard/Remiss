import { withRouter } from 'react-router';
import React from 'react';

const ChannelsIndexItem = (props) => {
  console.log(props);
  const {key, channel, router, selected} = props;
  const changeUrl = () => router.push(`home-screen/${channel.name}`);
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
