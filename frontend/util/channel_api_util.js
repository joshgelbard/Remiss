export const createChannel = channel => {
  return $.ajax({
    url: '/api/channels',
    method: 'POST',
    data: { channel }
  });
};

export const fetchChannels = () => {
  return $.ajax({
    url: '/api/channels',
    method: 'GET'
  });
};

export const fetchChannel = channelId => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: 'GET'
  });
};

export const joinChannel = channelId => {
  return $.ajax({
    url: `/api/channels/${channelId}/join`,
    method: 'GET'
  });
};
