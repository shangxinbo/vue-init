'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  MOCK_SERVER_PORT: '3009',
  PROXY_HOST: 'https://shangxinbo.github.io/',
  PROXY_PORT: '80',
  NODE_ENV: '"development"'
})
