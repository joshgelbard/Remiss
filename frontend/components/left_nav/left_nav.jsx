import React from 'react';
import ChannelsIndexContainer
  from '../channels_index/channels_index_container';

const UserAccountButton = ({user}) => (
  <div className='user-account-button'>
    <span>{user.username}</span>
    <i className="fa fa-sign-out"></i>
  </div>
);


class LeftNav extends React.Component {
  render(){
    return (
      <div className='left-nav'>
        <UserAccountButton user={this.props.user}/>
        <ChannelsIndexContainer />
        { /* DMsIndex */ }
      </div>
    );
  }
}

export default LeftNav;
