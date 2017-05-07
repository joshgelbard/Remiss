import { RECEIVE_CHANNEL, RECEIVE_ERRORS, RECEIVE_CHANNELS }
  from '../../actions/channel_actions';
import reducer from '../../reducers/channels_reducer'

describe('ChannelsReducer', () => {
  it('should return the initial state by default', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      { errors: [], channels: {} }
    )
  })

  it('should replace all channels on RECEIVE_CHANNELS', () => {
    expect(
      reducer(
        undefined,
        { type: RECEIVE_CHANNELS, channels: "new channels" }
      ).channels
    ).toEqual(
      "new channels"
    )
  })

  it('should replace one existing channel on RECEIVE_CHANNEL', () => {
    expect(
      reducer(
        { channels: { 1: {id: 1, value: 'old1'}, 2: {id: 2, value: 'old2'} } },
        { type: RECEIVE_CHANNEL, channel: {id: 1, value: 'new'} }
      ).channels
    ).toEqual(
      { 1: {id: 1, value: 'new'}, 2: {id: 2, value: 'old2'} }
    )
  })

  it('should add a new channel on RECEIVE_CHANNEL', () => {
    expect(
      reducer(
        { channels: { 1: {id: 1 } } },
        { type: RECEIVE_CHANNEL, channel: {id: 2} }
      ).channels
    ).toEqual(
      { 1: {id: 1}, 2: {id: 2} }
    )
  })


  it('should add errors on RECEIVE_ERRORS', () => {
    expect(
      reducer(
        {},
        { type: RECEIVE_ERRORS, errors: ["err1", "err2"] }
      ).errors
    ).toEqual(
      expect.arrayContaining(["err1", "err2"])
    )
  })

  it('should not otherwise modify state on RECEIVE_ERRORS', () => {
    expect(
      reducer(
        { channels: ["ch1", "ch2"] },
        { type: RECEIVE_ERRORS }
      ).channels
    ).toEqual(
      ["ch1", "ch2"]
    )
  })

})
