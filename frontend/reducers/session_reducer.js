import { RECEIVE_LOGIN, RECEIVE_LOGOUT, RECEIVE_ERRORS }
  from '../actions/session_actions';
import { RECEIVE_SIGNUP } from '../actions/user_actions';
import merge from 'lodash/merge';

const nullUser = { errors: [], currentUser: null };

const SessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
    case RECEIVE_SIGNUP:
      return merge({}, nullUser, {currentUser: action.user});
    case RECEIVE_LOGOUT:
      return nullUser;
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
