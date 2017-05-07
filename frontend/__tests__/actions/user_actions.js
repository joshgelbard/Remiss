import {
  RECEIVE_SIGNUP, RECEIVE_ERRORS, receiveSignup, receiveErrors, signup
} from '../../actions/user_actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const mockStore = configureMockStore([thunk])

describe('synchronous user actions', () => {
  it('should create a receive signup action', () => {
    expect(
      receiveSignup('userObject')
    ).toEqual(
      { type: RECEIVE_SIGNUP, user: 'userObject' }
    )
  })
  it('should create a receive errors action', () => {
    expect(
      receiveErrors('someErrors')
    ).toEqual(
      { type: RECEIVE_ERRORS, errors: 'someErrors' }
    )
  })
})

describe('async user actions', () => {
  it('dispatches a receiveSignup action after creating user', () => {
    let exampleUser = { username: 'aoeu' }
    nock('http://localhost/')
      .post('/api/users', JSON.stringify({ user: exampleUser }))
      .reply(200, { body: exampleUser })

    const store = mockStore()
    return store.dispatch(signup(exampleUser))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: RECEIVE_SIGNUP, user: exampleUser }
        ])
      })
  })
})
