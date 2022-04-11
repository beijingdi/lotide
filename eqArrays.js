const eqArrays = function(arr1,arr2){
  return arr1.length == arr2.length && (arr1,arr2).every((index) => {return arr1[index] === arr2[index];})   
}
module.exports = eqArrays;






