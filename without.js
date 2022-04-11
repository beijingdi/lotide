const without = function (arr1,arr2){
  let result = [];
  arr1.forEach((element) => {arr2.indexOf(element) < 0 ? result.push(element) : null});
  return result;
}

/*const assertArraysEqual = function(arr1,arr2) {
  const eqArrays = function(arr1,arr2){
    return arr1.length == arr2.length && (arr1,arr2).every((index) => {return arr1[index] === arr2[index];})
  }
  if (eqArrays(arr1,arr2)){
    console.log (`😍😍😍Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log (`🙃🙃🙃Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual(without([1,2,3],["1",2,3]) , [1]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */
module.exports = without;
