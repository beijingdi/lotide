const letterPositions = function(str) {

  let letterIndex = new Object;
  str.split("").map(letter => letterIndex[letter] = []);
  for (let i = 0; i < str.length; i++) {
    letterIndex[str[i]].push(i);
  }
  return letterIndex;
};

//console.log(letterPositions("Woody"));
//console.log(letterPositions("Woody")["o"]);
module.exports = letterPositions;
