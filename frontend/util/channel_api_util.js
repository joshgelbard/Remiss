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
