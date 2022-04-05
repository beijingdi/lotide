const args = process.argv.slice(2);
args.forEach(word =>{
  let reverseWord = "";
  for (let i = 0; i < word.length; i++){
    reverseWord += word[word.length - i - 1];
  }
  console.log(reverseWord);
});
