/*const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([]),undefined);
assertEqual(head([1,2,3],1));*/

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 2 for [2, 3, 4]", () => {
    assert.strictEqual(head([2, 3, 4]), 2);
  });
  
});