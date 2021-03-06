import { connect } from 'react-redux';
import { joinedChannels, channelsList, userDMsList } from '../../../reducers/selectors.js';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelsIndex from './channels_index';

const mapStateToProps = (state, ownProps) => ({
  userChannels: joinedChannels(state),
  userDMs: userDMsList(state),
  numChannels: channelsList(state).length,
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannels: () => dispatch(fetchChannels())
});

const ChannelsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelsIndex);
export default ChannelsIndexContainer;
