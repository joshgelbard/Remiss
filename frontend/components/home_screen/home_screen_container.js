import { connect } from 'react-redux';
import HomeScreen from './home_screen';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.currentChannel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
