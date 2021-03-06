import React from 'react';
import { withRouter } from 'react-router';
import ChannelsIndexItem from './channels_index_item';

class ChannelsIndex extends React.Component {

  channelButtons() {
    if (this.props.userChannels) {
      let selected;
      return this.props.userChannels.map( (c, idx) => {
        selected = c.id === this.props.currentChannel.id;
        return (<ChannelsIndexItem key={`ch-${idx}`} currentUser={this.props.currentUser}
          channel={c} selected={selected} />);
      });
    } else {
      return undefined;
    }
  }

  DMButtons() {
    if (this.props.userDMs) {
      let selected;
      return this.props.userDMs.map( (c, idx) => {
        selected = c.id === this.props.currentChannel.id;
        return (<ChannelsIndexItem key={`ch-${idx}`}
          channel={c} selected={selected} currentUser={this.props.currentUser}/>);
      });
    } else {
      return undefined;
    }
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render(){
    const browseChannels = () => this.props.router.push(`/browse-channels`);
    const newChannel = () => this.props.router.push('/new-channel');
    const conversations = () => this.props.router.push('/conversations');
    return (
      <div>
        <div className='channels-index-header'>
          <span className='header-browse-channels'>
            <span onClick={browseChannels}>CHANNELS </span>
            <span onClick={browseChannels}>({this.props.numChannels})</span>
          </span>
          <i className="fa fa-plus-circle" onClick={newChannel}></i>
        </div>
        <ul className='channels-index'>
          {this.channelButtons()}
        </ul>
        <div className='channels-index-header'>
          <span className='header-browse-channels'>
            <span onClick={conversations}>CONVERSATIONS </span>
          </span>
          <i className="fa fa-plus-circle" onClick={conversations}></i>
        </div>
        <ul className='channels-index'>
          {this.DMButtons()}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChannelsIndex);
