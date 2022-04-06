const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion passed: ${actual}! === ${expected}!`);
  } else {
    console.log(`🙃🙃🙃Assertion Failed: ${actual}! !== ${expected}!`);
  }
};


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if ((keys1.length === keys2.length) && keys1.every((key) => {
    return object1[key] === object2[key];
    
  })) {
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));