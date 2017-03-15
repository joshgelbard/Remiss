import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/user_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  return {loggedIn: Boolean(state.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.match(/signup/) ? 'signup' : 'signin'};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname.match(/signup/) ? signup : login;
  return { processForm: user => dispatch(action(user)) };
};

const AuthFormContainer = connect(mapStateToProps, mapDispatchToProps)(AuthForm);
export default AuthFormContainer;
