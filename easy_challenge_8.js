const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let characters = input.split(",");
  let numbers = [];
  for (let i = 0; i < characters.length; i++) {
    numbers.push(Number(characters[i]));
  }
  console.log("RESULT", numbers);
  // **** End your program here
  rl.close();
});
