const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion passed: ${actual}! === ${expected}!`);
  } else {
    console.log(`🙃🙃🙃Assertion Failed: ${actual}! !== ${expected}!`);
  }
};


const findKeyByValue = function(object,value) {
  let keys = Object.keys(object);
  for (let property of keys) {
    if (object[property].includes(value)) {
      return property;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);