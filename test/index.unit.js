'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export helpthehomeless-lib', function() {
    var helpthehomeless = require('../');
    should.exist(helpthehomeless.lib);
    should.exist(helpthehomeless.lib.Transaction);
    should.exist(helpthehomeless.lib.Block);
  });
});
