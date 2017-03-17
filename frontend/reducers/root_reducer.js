import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer
});

export default RootReducer;
