const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stringWithFrame = (input) => {
  let strings = input.split(" ");
  let largest = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > largest) {
      largest = strings[i].length;
    }
  }

  largest += 4;

  let output = "";
  for (let i = 0; i < largest; i++) {
    output += "*";
  }
  output += "\n";
  for (let i = 0; i < strings.length; i++) {
    output += "* ";
    output += strings[i];
    for (let j = strings[i].length; j < largest - 4; j++) {
      output += " ";
    }
    output += " *\n";
  }
  for (let i = 0; i < largest; i++) {
    output += "*";
  }
  return output;
};

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let result = stringWithFrame(input);
  console.log(result);
  // **** End your program here
  rl.close();
});
