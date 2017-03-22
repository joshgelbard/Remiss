import React from 'react';
import ChannelsIndexContainer
  from './channels_index/channels_index_container';


class LeftNav extends React.Component {
  render(){
    return (
      <div className='left-nav'>
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

export default LeftNav;
