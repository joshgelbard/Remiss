import React from 'react';
import ChannelIndexItem from './channel_index_item';

class BrowseChannelsForm extends React.Component {

  constructor(props){
    super(props);
    console.log('browse channels form props=', props);
  }

  channelsList(){
    const listItems = this.props.channels.map( (channel, idx) => (
      <ChannelIndexItem channel={ channel } key={`chan-${idx}`}/>
    ));
    return (
      <ul>
        { listItems }
      </ul>
    );
  }

  componentDidMount(){
    this.props.fetchChannels();
  }

  render() {
    return (
      <div className='browse-channels-form-container'>
        <form className='browse-channels-form'>
          <h1>Browse all {this.props.channels.length} channels</h1>
          { this.channelsList() }
        </form>
      </div>
   );
  }
}

export default BrowseChannelsForm;
