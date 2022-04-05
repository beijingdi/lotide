const args = process.argv.slice(2);
let pigLatin = ""
args.forEach(word =>{
  pigLatin += `${word.slice(1)}${word[0]}ay `;
});
console.log(pigLatin);