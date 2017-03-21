import { connect } from 'react-redux';
import { postMessage } from '../../actions/current_channel_actions';
import Compose from './compose';

const mapStateToProps = (state) => ({
  channel: state.currentChannel
});

const mapDispatchToProps = (dispatch) => ({
  postMessage: message => dispatch(postMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Compose);
