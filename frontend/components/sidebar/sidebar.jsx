import React from 'react';
import ChannelsIndexContainer
  from './channels_index/channels_index_container';
import { hashHistory } from 'react-router';


const Sidebar = (props) => {

  const logoutAndRedirect = () => props.logout()
    .then(() => hashHistory.push(`/signin`));

  if (props.user) {
    return (
      <div className='sidebar'>
        <div className='user-account-button' onClick={logoutAndRedirect}>
          <span>{props.user.username}</span>
          <i className="fa fa-sign-out"></i>
        </div>
        <ChannelsIndexContainer />
      </div>
    );
  } else {
    return null;
  }
};

export default Sidebar;
