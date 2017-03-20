import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import NewChannelForm from './new_channel_form';

const mapStateToProps = (state, ownProps) => ({
  channels: state.channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: channel => dispatch(createChannel(channel))
});

const NewChannelFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelForm);
export default NewChannelFormContainer;