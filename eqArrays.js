const eqArrays = function(arr1,arr2){
  return arr1.length == arr2.length && (arr1,arr2).every((index) => {return arr1[index] === arr2[index];})
    
}

eqArrays([1, 2, 3], [1, 2, 3])// => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]);// => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion passed: ${actual}! === ${expected}!`);
  } else {
    console.log(`🙃🙃🙃Assertion Failed: ${actual}! !== ${expected}!`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);


