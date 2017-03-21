import React from 'react';
import { withRouter } from 'react-router';
import ChannelsIndexItem from './channels_index_item';

const ChannelsIndexHeader = ({numChannels, onClick}) => (
  <div className='channels-index-header' onClick={onClick}>
    <span>CHANNELS </span><span>({numChannels})</span>
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
    const onHeaderClick = () => this.props.router.push(`/browse-channels`);
    return (
      <div>
        <ChannelsIndexHeader numChannels={this.props.numChannels} onClick={onHeaderClick}/>
        <ul>
          {this.channelButtons()}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChannelsIndex);
