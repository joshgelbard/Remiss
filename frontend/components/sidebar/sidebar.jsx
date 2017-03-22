import React from 'react';
import ChannelsIndexContainer
  from './channels_index/channels_index_container';


class Sidebar extends React.Component {
  render(){
    return (
      <div className='sidebar'>
        <div className='user-account-button' onClick={this.props.logout}>
          <span>{this.props.user.username}</span>
          <i className="fa fa-sign-out"></i>
        </div>
        <ChannelsIndexContainer />
        { /* DMsIndex */ }
      </div>
    );
  }
}

export default Sidebar;
