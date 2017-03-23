import React from 'react';

class ConversationChooser extends React.Component {

  redirect() {
    this.props.router.push(`/messages/${this.props.currentChannelName}`);
  }

  componentDidMount(){
    this.props.fetchChannels();
  }

  handleClick(e, actionType, otherUser) {
    const sortedNames = [this.props.currentUser.username, otherUser.username].sort();
    const channelName = sortedNames.join('-');
    if (actionType === 'open') {
      this.props.router.push(`/messages/${channelName}`);
    } else {
      this.props.createChannel({name: channelName, channel_type: 'DM', invitee_id: otherUser.id})
        .then(() => this.props.router.push(`/messages/${channelName}`));
    }
  }

  DMsList() {
    const { userDMs, allUsers, currentUser } = this.props;
    const unmessagedUsers = {};
    const listItems = [];
    allUsers.forEach( user => { unmessagedUsers[user.id] = user; } );
    userDMs.forEach( (dm, idx) => {
      dm.members.forEach( m => { delete unmessagedUsers[m.id]; } );
      const otherUser = dm.members[0].id === currentUser.id ? dm.members[1] : dm.members[0];
      listItems.push(
        <li key={`existdm-${idx}`}
          onClick={e => this.handleClick(e, 'open', otherUser)}>
          {otherUser.username}
        </li>);
    });
    const unmessagedUsersList = Object.keys(unmessagedUsers).map( k => unmessagedUsers[k] );
    unmessagedUsersList.forEach( (user, idx) => {
      if (user.username.slice(0, 6) !== 'guest_') {
        listItems.push(
          <li key={`newdm-${idx}`}
            onClick={e => this.handleClick(e, 'create', user)}>
            {user.username}
          </li>
        );
      }
    });
    return <ul>{ listItems }</ul>;
  }

  headerRow(){
    return (
      <div className='conversation-chooser-header'>
        <span><h1>Start or continue a conversation</h1></span>
        <i className="fa fa-times" onClick={this.redirect.bind(this)}></i>
      </div>
    );
  }

  render() {
    return (
      <div className='conversation-chooser-container'>
        <form className='conversation-chooser-form'>
          {this.headerRow()}
          {this.DMsList()};

        </form>
      </div>
    );
  }
}

export default ConversationChooser;
