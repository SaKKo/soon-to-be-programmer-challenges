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
  let max = undefined;
  for (let i = 0; i < numbers.length; i++) {
    if (max === undefined || max < numbers[i]) {
      max = numbers[i];
    }
  }
  console.log("RESULT", max);
  // **** End your program here
  rl.close();
});
