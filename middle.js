const middle = function(array) {
  // odd: Math.Ceil(array.length/2) - 1)
  //even : (array.length/2 - 1), (array.length/2)
  let middleArray = [];
  for (let i = Math.ceil(array.length / 2  - 1); i <= Math.floor(array.length / 2); i++) {
    middleArray.push(array[i]);
  }
  return middleArray;
};

module.exports = middle;

