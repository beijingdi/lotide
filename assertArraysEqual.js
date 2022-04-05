const assertArraysEqual = function(arr1,arr2) {
  const eqArrays = function(arr1,arr2){
    return arr1.length == arr2.length && (arr1,arr2).every((index) => {return arr1[index] === arr2[index];})
  }
  if (eqArrays(arr1,arr2)){
    console.log (`😍😍😍Assertion passed: ${arr1}! === ${arr2}!`);
  } else {
    console.log (`🙃🙃🙃Assertion Failed: ${arr1}! !== ${arr2}!`);
  }
}

assertArraysEqual([1,2,3],[2,3,1]);
assertArraysEqual([1,2,3],['1','2','3']);
assertArraysEqual([1,2,3],[1,2,3]);