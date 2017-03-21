import React from 'react';
import LeftNav from '../left_nav/left_nav';
import CurrentChat from '../current_chat/current_chat';

class HomeScreen extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { currentUser, channels } = this.props;
    return (
      <div className='home-screen'>
        <LeftNav user={currentUser} channels={channels}/>
        <CurrentChat />
      </div>
    );
  }
}

export default HomeScreen;
