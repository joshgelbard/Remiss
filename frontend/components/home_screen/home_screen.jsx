import React from 'react';
import Sidebar from '../sidebar/sidebar';
import CurrentChat from '../current_chat/current_chat';

class HomeScreen extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchChannel(this.props.params.channelName);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.channelName !== newProps.params.channelName) {
      this.props.fetchChannel(newProps.params.channelName);
    }
  }

  render() {
    const { currentUser, currentChannel, logout } = this.props;
    return (
      <div className='messages'>
        <Sidebar user={currentUser} logout={logout} />
        <CurrentChat channel={currentChannel}/>
      </div>
    );
  }
}

export default HomeScreen;
