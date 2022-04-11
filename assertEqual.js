/*const assert = function(arg){
  console.assert(arg, {errorMsg: "Assertion failed"});
}

const sum = function(a, b) {
  return a + b;
}

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!
*/
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion passed: ${actual}! === ${expected}!`);
  } 
  if (actual !== expected) {
    console.log(`🙃🙃🙃Assertion Failed: ${actual}! !== ${expected}!`);
  }
};

//Assertion Failed: Lighthouse Labs !== Bootcamp
//Assertion Passed: 1 === 1
module.exports = assertEqual;