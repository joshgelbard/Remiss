import React from 'react';
import LeftNav from '../left_nav/left_nav';
import CurrentChat from '../current_chat/current_chat';

class HomeScreen extends React.Component {
  render() {
    return (
      <div className='home-screen'>
        <LeftNav />
        <CurrentChat />
      </div>
    );
  }
}

export default HomeScreen;
