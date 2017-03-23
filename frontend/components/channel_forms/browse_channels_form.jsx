import React from 'react';

const ChannelBrowserItem = ({ channel, onClick }) => {
  return(
    <li className='channel-form-row' onClick={onClick}>
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
    this.props.router.push(`/messages/${this.props.currentChannelName}`);
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
      <div className='channel-form-body'>
        <ul>
          { listItems }
        </ul>
      </div>
    );
  }

  componentDidMount(){
    this.props.fetchChannels();
  }

  headerRow(){
    return (
      <div className='channel-form-header'>
        <span><h1>Browse all {this.props.channels.length} channels</h1></span>
        <i className="fa fa-times" onClick={this.redirect.bind(this)}></i>
      </div>
    );
  }

  render() {
    return (
      <div className='channel-form-container'>
        <form className='channel-form'>
          { this.headerRow.bind(this)() }
          { this.channelsList.bind(this)() }
        </form>
      </div>
   );
  }
}

export default BrowseChannelsForm;
