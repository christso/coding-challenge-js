var assert = require('assert');
var solution1 = require('../solution1');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Solution', function() {
  describe('solution1', function() {
    it('should return 1', function() {
      assert.equal(solution1(4, 3), 7);
    });
  });
});
