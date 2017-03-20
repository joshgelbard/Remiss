import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';
import CurrentChannelReducer from './current_channel_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer,
  currentChannel: CurrentChannelReducer
});

export default RootReducer;
