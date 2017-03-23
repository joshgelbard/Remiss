export const channelsList = ({ channels }) => {
  return Object.keys(channels.channels)
    .map(k => channels.channels[k])
    .filter(c => c.channel_type === 'CHANNEL');
};

export const usersList = (state) => {
  const general = channelsList(state).find(c => c.name === 'general');
  if (general) {
    return general.members;
  } else {
    return [];
  }
};

export const userDMsList = ({ channels, session }) => {
  return Object.keys(channels.channels)
    .map(k => channels.channels[k])
    .filter(c => c.channel_type === 'DM')
    .filter(c => {
      const participantIds = c.members.map(m => m.id);
      return participantIds.includes(session.currentUser.id);
    });
};

export const channelsAvailableToJoin = ({ channels, session }) => {
  return channelsList({ channels }).filter( channel => {
    const memberIds = channel.members.map( m => m.id );
    return (!memberIds.includes(session.currentUser.id));
  });
};

export const joinedChannels = (state) => {
  return channelsList(state).filter( channel => {
    const memberIds = channel.members.map( m => m.id );
    return (memberIds.includes(state.session.currentUser.id));
  });
};
