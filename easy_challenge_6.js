const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let characters = input.split("");
  let reversedCharacters = characters.reverse();
  let result = reversedCharacters.join("");
  console.log("RESULT", result);
  // **** End your program here
  rl.close();
});
