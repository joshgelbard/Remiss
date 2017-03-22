import * as MessageAPI from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const postMessage = message => dispatch => {
  return MessageAPI.postMessage(message)
    .then(res => dispatch(receiveMessage(res)))
    .fail(errors => console.log('postMessage errors!'));
};