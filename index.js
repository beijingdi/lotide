const { assert } = require('console');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const pigLatin = require('./pig-latin');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle, 
  pigLatin,
  tail,
  takeUntil,
  without
};

console.log(module);




/*// import * as fs from 'fs';

for (const fileName of fs.readdirSync('./')) {
const fileContents = `
import { describe } from "mocha";
import { assert } from "chai";
// import { ${fileName.replace(".js","")} } from "../lib/${fileName}";

// describe("${fileName.replace(".js", "")}", () => {
//   it("");
//   it("");
//   it("");
//   it("");
//   it("");
// });`;
//   fs.appendFileSync(`tests/${fileName}`, fileContents);
// }*/