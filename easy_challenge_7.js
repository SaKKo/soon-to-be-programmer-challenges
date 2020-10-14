const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let characters = input.split(",");
  console.log("RESULT", characters);
  // **** End your program here
  rl.close();
});
