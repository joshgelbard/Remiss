import * as ChannelAPI from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SWITCH_TO_CHANNEL = 'SWITCH_TO_CHANNEL';

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

export const switchToChannel = channel => ({
  type: SWITCH_TO_CHANNEL,
  channel
});

export const createChannel = channel => dispatch => {
  return ChannelAPI.createChannel(channel)
    .then( res => dispatch(receiveChannel(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchChannels = () => dispatch => {
  return ChannelAPI.fetchChannels()
    .then( res => dispatch(receiveChannels(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const joinChannel = channel => dispatch => {
  return ChannelAPI.joinChannel(channel)
    .then( res => dispatch(switchToChannel(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchChannel = channel => dispatch => {
  return ChannelAPI.fetchChannel(channel)
    .then( res => dispatch(switchToChannel(res)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)));
};
