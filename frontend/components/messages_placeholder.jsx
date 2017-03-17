import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchChannels } from '../actions/channel_actions';

class MessagesPlaceholder extends React.Component {
  constructor(props){
    super(props);
    console.log('messages placeholder props=', props);
  }

  componentWillMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <div>
        <Link to='/new-channel'>New channel</Link>
        <h1>Messages go here!</h1>
        <p>Channels: {this.props.channels.length}</p>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return { channels: Object.keys(state.channelsList.channels).map(k => state.channelsList.channels[k]) }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPlaceholder);
