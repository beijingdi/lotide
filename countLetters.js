function countLetters(str) {
  let letterCounter = new Object;
  for (let letter of str) {
    letterCounter[letter] = letterCounter[letter] + 1 || 1;
  }
  return letterCounter;
}

console.log(countLetters("woody"));