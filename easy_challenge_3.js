const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let inputLength = input.length;
  let result = "";
  for (let i = 1; i <= inputLength; i++) {
    result += input;
  }
  console.log("RESULT", result);
  // **** End your program here
  rl.close();
});
