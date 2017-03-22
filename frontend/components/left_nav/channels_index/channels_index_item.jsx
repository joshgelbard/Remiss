import { withRouter } from 'react-router';
import React from 'react';

const ChannelsIndexItem = (props) => {
  const {key, channel, router} = props;
  const changeUrl = () => router.push(`home-screen/${channel.name}`);
  return (
    <li className='channels-index-item' onClick={changeUrl} key={key}>
      # {channel.name}
    </li>
  );
};

export default withRouter(ChannelsIndexItem);
