import jsdom from 'jsdom'
const JSDOM = jsdom.JSDOM

global.window = new JSDOM(`...`).window
global.document = global.window.document
global.navigator = global.window.navigator;

// Both these must be required after a DOM is initialized.
import { mount } from 'enzyme'
import React from 'react'

import Root from '../components/root'
import configureStore from '../store/store'


const store = configureStore()

describe('<Root />', () => {
  it('test goes here', () => {
    const wrapper = mount(<Root store={store} />)
  })
})
