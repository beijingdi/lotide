const raisinAlarmArray = function (cookies) {
  for (const cookie of cookies) {
    let results = [];
    for(let i = 0; i < cookie.length; i++) {
      if (ingredient === "🍇") {
        results.push("Rasin Alert!");
        i = cookie.length; 
      }
      results.push("All good!");
  }
  return results;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]);
)
