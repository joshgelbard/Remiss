import reducer from '../../reducers/current_channel_reducer'
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/current_channel_actions';

describe('CurrentChannelReducer', () => {
  it('should return the initial state by default', () => {
    let action = {}
    let newState = reducer(undefined, action)
    let expectedState = {id: undefined, name: undefined, members: [], messages: []}
    expect(newState).toEqual(expectedState)
  })

  it('should add a message to the state on RECEIVE_MESSAGE', () => {
    let action = { type: RECEIVE_MESSAGE, message: "new msg" }
    let newState = reducer({ messages: ["old msg 1", "old msg 2"] }, action)
    let expectedState = { messages: ["old msg 1", "old msg 2", "new msg"] }
    expect(newState.messages).toEqual(expectedState.messages)
  })

  it('should entirely replace the state on RECEIVE_CHANNEL', () => {
    let action = { type: RECEIVE_CHANNEL, channel: "new channel" }
    expect(reducer("old channel", action)).toEqual("new channel")
  })
})
