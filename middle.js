const eqArrays = function(arr1,arr2) {
  return arr1.length === arr2.length && (arr1,arr2).every((index) => {
    return arr1[index] === arr2[index];
  });
};

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`😍😍😍Assertion passed: ${arr1}! === ${arr2}!`);
  } else {
    console.log(`🙃🙃🙃Assertion Failed: ${arr1}! !== ${arr2}!`);
  }
};

const middle = function(array) {
  // odd: Math.Ceil(array.length/2) - 1)
  //even : (array.length/2 - 1), (array.length/2)
  let middleArray = [];
  for (let i = Math.ceil(array.length / 2 - 1); i <= Math.floor(array.length / 2); i++) {
    middleArray.push(array[i]);
  }
  return middleArray;
};

assertArraysEqual(middle([1, 2, 3, 4]) , [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);