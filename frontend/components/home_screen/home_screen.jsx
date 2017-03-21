import React from 'react';
import LeftNav from '../left_nav/left_nav';
import CurrentChat from '../current_chat/current_chat';

class HomeScreen extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchChannel(this.props.params.channelId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.channelId !== newProps.params.channelId) {
      this.props.fetchChannel(newProps.params.channelId);
    }
  }

  render() {
    const { currentUser, currentChannel } = this.props;
    return (
      <div className='home-screen'>
        <LeftNav user={currentUser} />
        <CurrentChat channel={currentChannel}/>
      </div>
    );
  }
}

export default HomeScreen;
