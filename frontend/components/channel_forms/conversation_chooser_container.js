import { connect } from 'react-redux';
import { joinChannel, fetchChannels, fetchChannel, createChannel } from '../../actions/channel_actions';
import { userDMsList, usersList } from '../../reducers/selectors.js';
import ConversationChooser from './conversation_chooser';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  allUsers: usersList(state),
  userDMs: userDMsList(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationChooser);
