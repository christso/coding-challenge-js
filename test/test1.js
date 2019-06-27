var assert = require('assert');
var solution = require('../solution1');

describe('Solution 1 - smallest positive N not in A', function() {
  describe('Simple 1', function() {
    it('should return smallest N not in A', function() {
      assert.equal(solution([1, 3, 6, 4, 1, 2]), 5);
    });
  });
  describe('Simple 2', function() {
    it('should return smallest N not in A', function() {
      assert.equal(solution([1, 2, 3]), 4);
    });
  });
  describe('Simple 3', function() {
    it('should return smallest N not in A ', function() {
      assert.equal(solution([-1, -3]), 1);
    });
  });
  describe('Single', function() {
    it('should return smallest N not in A', function() {
      assert.equal(solution([1]), 2);
    });
  });
  describe('Negative Positive', function() {
    it('should return smallest N not in A', function() {
      assert.equal(solution([-1000, 100000, 50000]), 1);
    });
  });
});
