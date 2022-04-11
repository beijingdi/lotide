const middle = require("../middle");
//const assertArraysEqual = require("../assertArraysEqual");
const { assert } = require("chai");

assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
//assertArraysEqual(middle([1, 2, 3, 4]) , [2,3]);
assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);