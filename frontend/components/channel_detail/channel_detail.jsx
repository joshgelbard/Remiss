import React from 'react';

const ChannelDetailHeader = ({ channel }) => {
  return (
    <h1 className='channel-detail-header'>About #{channel.name}</h1>
  );
};

const ChannelInfo = ({ channel }) => {
  return (
    <div className='channel-info'>
      <h2>Channel Details</h2>
      <h3>Purpose</h3>
      <p>{channel.purpose}</p>
      <p>Created by someone on date</p>
    </div>
  );
};

const MembersList = ({ channel }) => {
  const members = channel.members.map( (m, idx) => (
    <li key={`member-${idx}`}>
      {m.username}
    </li>
  ));
  return (
    <ul>
      { members }
    </ul>
  );
};

class ChannelDetail extends React.Component {
  render(){
    const { channel } = this.props;
    return (
      <div className='channel-detail'>
        <ChannelDetailHeader channel={channel} />
        <ChannelInfo channel={channel} />
        <MembersList channel={channel} />
      </div>
    );
  }
}

export default ChannelDetail;
