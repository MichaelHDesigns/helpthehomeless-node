'use strict';

var createError = require('errno').create;

var HelpthehomelessNodeError = createError('HelpthehomelessNodeError');

var RPCError = createError('RPCError', HelpthehomelessNodeError);

module.exports = {
  Error: HelpthehomelessNodeError,
  RPCError: RPCError
};
