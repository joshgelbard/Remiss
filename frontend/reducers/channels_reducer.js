import { RECEIVE_CHANNEL, RECEIVE_ERRORS, RECEIVE_CHANNELS }
  from '../actions/channel_actions';
import merge from 'lodash/merge';

const emptyChannelsList = { errors: [], channels: {} };

const ChannelsReducer = (state = emptyChannelsList, action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, emptyChannelsList, { channels: action.channels });
    case RECEIVE_CHANNEL:
      const newState = merge({}, emptyChannelsList, state);
      newState[action.channel.id] = action.channel;
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default ChannelsReducer;
