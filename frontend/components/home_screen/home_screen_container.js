import { connect } from 'react-redux';
import HomeScreen from './home_screen';
import { fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
