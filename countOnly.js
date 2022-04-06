const countOnly = function(allItems, itemsToCount) {
  let countResult = new Object;
  for (let key in itemsToCount) {
    countResult[key] = 0;
  }
  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      countResult[item] ++;
    }
  }
  for (let key in countResult) {
    if (countResult[key] === 0) {
      delete countResult[key];
    }
  }
  return countResult;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion passed: ${actual}! === ${expected}!`);
  } else {
    console.log(`🙃🙃🙃Assertion Failed: ${actual}! !== ${expected}!`);
  }
};






const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
