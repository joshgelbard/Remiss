import merge from 'lodash/merge';
import { SWITCH_TO_CHANNEL } from '../actions/channel_actions';

const nullChannel = {id: undefined, name: undefined, members: []};

const CurrentChannelReducer = (state = nullChannel, action) => {
  switch (action.type) {
    case SWITCH_TO_CHANNEL:
      return merge({}, state, action.channel);
    default:
      return state;
  }
};

export default CurrentChannelReducer;
