export const channelsList = ({ channels }) => {
  return Object.keys(channels.channels).map(k => channels.channels[k]);
};

export const channelsAvailableToJoin = ({ channels, session }) => {
  return channelsList({ channels }).filter( channel => {
    const memberIds = channel.members.map( m => m.id );
    return (!memberIds.includes(session.currentUser.id));
  });
};
