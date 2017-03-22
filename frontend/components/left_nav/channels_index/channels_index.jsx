import React from 'react';
import { withRouter } from 'react-router';
import ChannelsIndexItem from './channels_index_item';

const ChannelsIndexHeader = ({numChannels, browseChannels, newChannel}) => (
  <div className='channels-index-header'>
    <span onClick={browseChannels}>CHANNELS</span>
    <span onClick={browseChannels}>({numChannels})</span>
    <i className="fa fa-plus-circle" onClick={newChannel}></i>
  </div>
);

class ChannelsIndex extends React.Component {

  channelButtons() {
    if (this.props.userChannels) {
      return this.props.userChannels.map( (c, idx) => (
        <ChannelsIndexItem key={`ch-${idx}`} channel={c} />
      ));
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
    return (
      <div>
        <ChannelsIndexHeader numChannels={this.props.numChannels} browseChannels={browseChannels} newChannel={newChannel}/>
        <ul>
          {this.channelButtons()}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChannelsIndex);
