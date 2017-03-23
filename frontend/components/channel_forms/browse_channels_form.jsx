import React from 'react';

const ChannelBrowserItem = ({ channel, onClick }) => {
  return(
    <li className='browse-channels-row' onClick={onClick}>
      <div><span className='channel-name'># {channel.name}</span></div>
      <div><span className='creation-info'>Created by {channel.creator} on {channel.created_at}</span></div>
      <div><span className='purpose'>{channel.purpose}</span></div>
      {/*<span className='members-count'>{channel.members.length}</span>*/}
    </li>
  );
};

class BrowseChannelsForm extends React.Component {

  constructor(props){
    super(props);
  }

  redirect() {
    this.props.router.push('/messages');
  }

  handleClick(e, channelId) {
    this.props.joinChannel(channelId)
      .then(() => this.props.router.push(`/messages/${channelId}`));
  }

  channelsList(){
    const listItems = this.props.channels.map( (channel, idx) => (
      <ChannelBrowserItem
        channel={ channel }
        key={`chan-${idx}`}
        onClick={e => this.handleClick(e, channel.name)} />
    ));
    return (
      <label>Channels you can join
        <ul>
          { listItems }
        </ul>
      </label>
    );
  }

  componentDidMount(){
    this.props.fetchChannels();
  }

  headerRow(){
    return (
      <div className='browse-channels-header'>
        <span><h1>Browse all {this.props.channels.length} channels</h1></span>
        <i className="fa fa-times" onClick={this.redirect.bind(this)}></i>
      </div>
    );
  }

  render() {
    return (
      <div className='browse-channels-form-container'>
        <form className='browse-channels-form'>
          { this.headerRow.bind(this)() }
          { this.channelsList.bind(this)() }
        </form>
      </div>
   );
  }
}

export default BrowseChannelsForm;
