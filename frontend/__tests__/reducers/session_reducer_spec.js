import reducer from '../../reducers/session_reducer'
import {
  RECEIVE_LOGIN, RECEIVE_LOGOUT, RECEIVE_ERRORS
 } from '../../actions/session_actions'
 import { RECEIVE_SIGNUP } from '../../actions/user_actions'

describe('SessionReducer', () => {
  it('should return the initial state by default', () => {
    let action = {}
    let newState = reducer(undefined, action)
    let expectedState = { errors: [], currentUser: null }
    expect(newState).toEqual(expectedState)
  })

  it('should change the currentUser on RECEIVE_LOGIN', () => {
    let action = { type: RECEIVE_LOGIN, user: "user object goes here" }
    let newState = reducer({}, action)
    let expectedState = { currentUser: action.user }
    expect(newState.currentUser).toEqual(expectedState.currentUser)
  })

  it('should change the currentUser on RECEIVE_SIGNUP', () => {
    let action = { type: RECEIVE_SIGNUP, user: "user object goes here" }
    let newState = reducer({}, action)
    let expectedState = { currentUser: action.user }
    expect(newState.currentUser).toEqual(expectedState.currentUser)
  })

  it('should set currentUser to nullUser on RECEIVE_LOGOUT', () => {
    let action = { type: RECEIVE_LOGOUT }
    let newState = reducer({ currentUser: "logged in!" }, action)
    let expectedState = { currentUser: null }
    expect(newState.currentUser).toEqual(expectedState.currentUser)
  })

  it('should add errors on RECEIVE_ERRORS', () => {
    let action = { type: RECEIVE_ERRORS, errors: ["err1", "err2"] }
    let newState = reducer({}, action)
    let expectedState = { errors: action.errors }
    expect(newState).toEqual(expectedState)
  })


})
