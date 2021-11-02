const { assert } = require('chai');
const { it, describe } = require('mocha');
const tail = require('../tail');


describe("#tail", () => {
  it("returns [2, 3] of [1, 2, 3]", () => {
    assert.deepEqual((tail(['1', '2', '3'])), ['2', '3']);
  });
  it("returns '1' for length of tail['5', '6']", () => {
    assert.strictEqual(tail(['5', '6']).length, 1);
  });

});