const flatten = function(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      inputArray = inputArray.slice(0,i).concat(inputArray[i]).concat(inputArray.slice(i + 1));
      i--;
    }
  }
  return inputArray;
};

console.log(flatten([1,2,[3,[4,5]]]));