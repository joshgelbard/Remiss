import { connect } from 'react-redux';
import { joinChannel, fetchChannels } from '../../actions/channel_actions';
import { channelsList } from '../../reducers/selectors.js';
import BrowseChannelsForm from './browse_channels_form';

const mapStateToProps = (state, ownProps) => {
  return {channels: channelsList(state) };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  joinChannel: channel => dispatch(joinChannel(channel)),
  fetchChannels: () => dispatch(fetchChannels())
});

const BrowseChannelsFormContainer = connect(mapStateToProps, mapDispatchToProps)(BrowseChannelsForm);
export default BrowseChannelsFormContainer;
