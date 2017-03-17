import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channelsList: ChannelsReducer
});

export default RootReducer;
