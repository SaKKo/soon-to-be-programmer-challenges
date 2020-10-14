const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let number = Number(input);
  let result = Math.pow(number, 5);
  console.log("RESULT", result);
  // **** End your program here
  rl.close();
});
