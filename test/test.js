var assert = require('chai').assert;
describe('Server', function() {
  describe('initialize', function () {
    it('should initialize with a single parameter', function () {
      var io = require('socket.io')();
      require('../')(io);
    });

    it('shouldn\'t initialize with no parameters', function () {
      assert.throws(() => require('../')());
    });
  });
});
