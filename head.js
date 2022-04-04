const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙃🙃🙃Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr){
  return arr[0];
}

assertEqual (head([]),undefined);