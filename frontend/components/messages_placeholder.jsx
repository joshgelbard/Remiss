import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchChannels, fetchChannel } from '../actions/channel_actions';
import { channelsList } from '../reducers/selectors.js';

class MessagesPlaceholder extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannels();
    this.props.fetchChannel(this.props.currentChannel.id);
  }

  channelMessages() {
    if (this.props.currentChannel.messages){
      return this.props.currentChannel.messages.map( (message, idx) => (
        <li key={`msg-${idx}`}>{message.username}: {message.body}</li>
      ));
    } else {
      return undefined;
    }
  }

  render() {
    return (
      <div>
        <Link to='/new-channel'>New channel</Link>
        <Link to='/browse-channels'>Browse channels</Link>
        <Link to='/logout'>Log out</Link>
        <h1>Messages go here!</h1>
        <p>Channels: {this.props.channels.length}</p>
        <p>Current channel: {this.props.currentChannel.name}</p>
        <p>Channel members: {this.props.currentChannel.members.length}</p>
        <br/><br/>
        <ul>{ this.channelMessages() }</ul>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return { channels: channelsList(state), currentChannel: state.currentChannel };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPlaceholder);
