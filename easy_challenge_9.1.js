const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let characters = input.split(",");
  let max = undefined;
  for (let i = 0; i < characters.length; i++) {
    if (max === undefined || max < Number(characters[i])) {
      max = Number(characters[i]);
    }
  }
  console.log("RESULT", max);
  // **** End your program here
  rl.close();
});
