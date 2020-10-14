const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let characters = input.split(",");
  let total = 0;
  for (let i = 0; i < characters.length; i++) {
    total += Number(characters[i]);
  }
  console.log("RESULT", total);
  // **** End your program here
  rl.close();
});
