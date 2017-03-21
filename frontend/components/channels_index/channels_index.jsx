import React from 'react';

const ChannelsIndexHeader = ({numChannels}) => (
  <div className='channels-index-header'>
    <span>CHANNELS </span><span>({numChannels})</span>
  </div>
);

class ChannelsIndex extends React.Component {

  channelButtons() {
    if (this.props.userChannels) {
      return this.props.userChannels.map( (c, idx) => (
        <li className='channels-index-item' key={`ch-${idx}`}>
          # {c.name}
        </li>
      ));
    } else {
      return undefined;
    }
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render(){
    return (
      <div>
        <ChannelsIndexHeader numChannels={this.props.numChannels}/>
        <ul>
          {this.channelButtons()}
        </ul>
      </div>
    );
  }
}

export default ChannelsIndex;
