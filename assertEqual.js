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
    console.log("😍😍😍Assertion passed: " + actual + " === " + "expected");
  } else {
    console.log("🙃🙃🙃Assertion Failed: " + actual + " !== " + "Bootcamp");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


//Assertion Failed: Lighthouse Labs !== Bootcamp
//Assertion Passed: 1 === 1
