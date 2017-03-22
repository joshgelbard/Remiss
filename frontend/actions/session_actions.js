import * as SessionAPI from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_LOGIN ='RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveLogin = user => ({
  type: RECEIVE_LOGIN,
  user
});

export const login = user => dispatch => {
  return SessionAPI.login(user)
    .then(res => dispatch(receiveLogin(res)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const logout = () => dispatch => {
  return SessionAPI.logout()
    .then(() => dispatch(receiveLogout()))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
