const tail = require('../tail.js');
//const assertEqual = require('../assertEqual.cd ..js');
const { assert } = require("chai");
const result = tail(["Hello", "Lighthouse", "Labs"]);

assert.deepEqual(result.length, 2); // ensure we get back two elements
assert.deepEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assert.deepEqual(result[1], "Labs"); // ensure second element is "Labs"
