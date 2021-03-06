const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dictionary = {
  1: "ค้อน",
  2: "กรรไกร",
  3: "กระดาษ",
};

let checkWinner = function (you, com) {
  if (you === com) {
    return "none";
  } else if (com - you === 1) {
    return "you";
  } else if (you - com === 1) {
    return "com";
  } else if (com - you === 2) {
    return "com";
  } else if (you - com === 2) {
    return "you";
  }
};

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let you = Number(input);
  let com = Math.floor(Math.random() * 3) + 1;
  let winner = checkWinner(you, com);
  console.log(
    `You picked ${dictionary[you]}, computer picked ${dictionary[com]}, Winner is ${winner}`
  );
  // **** End your program here
  rl.close();
});
