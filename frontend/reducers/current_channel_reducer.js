import merge from 'lodash/merge';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/current_channel_actions';

const nullChannel = {id: undefined, name: undefined, members: [], messages: []};

const CurrentChannelReducer = (state = nullChannel, action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.channel;
    case RECEIVE_MESSAGE:
      const messages = state.messages.slice();
      messages.push(action.message);
      return merge({}, state, { messages });
    default:
      return state;
  }
};

export default CurrentChannelReducer;
