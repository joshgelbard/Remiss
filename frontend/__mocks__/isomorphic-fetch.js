const fetch = require.requireActual('isomorphic-fetch')

export default (url, config) => fetch('http://localhost' + url, config)
