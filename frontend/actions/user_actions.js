import * as UserAPI from '../util/user_api_util';

export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveSignup = user => ({
  type: RECEIVE_SIGNUP,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return UserAPI.signup(user)
    .then(res => dispatch(receiveSignup(res)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};
