require('babel-core/register')({
  presets: ['es2015'],
});
require('babel-polyfill');

module.exports = require('./app.js');
