import merge from 'lodash/merge';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const nullChannel = {id: undefined, name: undefined, members: []};

const CurrentChannelReducer = (state = nullChannel, action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, action.channel);
    default:
      return state;
  }
};

export default CurrentChannelReducer;
