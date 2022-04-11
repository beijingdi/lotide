const chai = require('chai');
const expect = chai.expect;
const assertArraysEqual = require("../assertArraysEqual");

expect(() => assertArraysEqual([1,2,3],[2,3,1])).to.throw(`🙃🙃🙃Assertion failed: [1,2,3] !== [2,3,1]`);


//assertArraysEqual([1,2,3],[2,3,1]);
//assertArraysEqual([1,2,3],['1','2','3']);
//assertArraysEqual([1,2,3],[1,2,3]);