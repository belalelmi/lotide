const { assert } = require('chai');
const middle = require('../middle');


describe('#middle', () => {
  it('should return 3 for the middle of [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });
  it('should return [5,6] for the middle of [1, 2, 3, 5, 6, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 5, 6, 3, 4, 5]), [5, 6]);
  });
  it('should return empty array for the middle of [1, 7]', () => {
    assert.deepEqual(middle([1, 7]), []);
  });
  it('should return empty array for the middle of [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
});
