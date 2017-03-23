import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import NewChannelForm from './new_channel_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.channels.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: channel => dispatch(createChannel(channel))
});

const NewChannelFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelForm);
export default NewChannelFormContainer;
