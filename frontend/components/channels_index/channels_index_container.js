import { connect } from 'react-redux';
import { joinedChannels, channelsList } from '../../reducers/selectors.js';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelsIndex from './channels_index';

const mapStateToProps = (state) => ({
  userChannels: joinedChannels(state),
  numChannels: channelsList(state).length
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
});

const ChannelsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelsIndex);
export default ChannelsIndexContainer;
