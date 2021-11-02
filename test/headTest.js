//test run
const { assert } = require('chai');
const { it } = require('mocha');
const assertEqual = require('../assertEqual');
const head = require('../head');

describe("#head", () => {
  it("should return 1 for the array [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("return '5' for [5]", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returh undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
});
