const inspect = require('util').inspect;
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if ((keys1.length === keys2.length) && keys1.every((key) => {
    return object1[key] === object2[key];
  })) {
    return true;
  }
};
  
const assertObjectsEqual = function(object1,object2) {
  const actualObjStr = inspect(object1);
  const expectObjStr = inspect(object2);
  const res = eqObjects(object1, object2);
  let assertionEqualStr = `✅✅✅ Assertion Passed: ${actualObjStr} === ${expectObjStr}`;
  if (!res) {
    assertionEqualStr = `🛑🛑🛑 Assertion Failed: ${actualObjStr} !== ${expectObjStr}`;
  }
  console.log(assertionEqualStr);
};


  

assertObjectsEqual({a:1,b:2},{b:2,a:1});
assertObjectsEqual({a:1},{b:2,a:1});
assertObjectsEqual({a:1,b:"2"},{b:2,a:1});
assertObjectsEqual({a:1},{a:1});