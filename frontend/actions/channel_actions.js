import * as ChannelAPI from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createChannel = channel => dispatch => {
  return ChannelAPI.createChannel(channel)
    .then( res => dispatch(joinChannel(res.name)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchChannels = () => dispatch => {
  return ChannelAPI.fetchChannels()
    .then( res => dispatch(receiveChannels(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const joinChannel = channelId => dispatch => {
  return ChannelAPI.joinChannel(channelId)
    .then( res => dispatch(receiveChannel(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchChannel = channelId => dispatch => {
  return ChannelAPI.fetchChannel(channelId)
    .then( res => dispatch(receiveChannel(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};
