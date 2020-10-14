const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const thaiWords = [
  "ศูนย์",
  "หนึ่ง",
  "สอง",
  "สาม",
  "สี่",
  "ห้า",
  "หก",
  "เจ็ด",
  "แปด",
  "เก้า",
  "สิบ",
];

rl.question("User Input: ", function (input) {
  // **** Start your program here
  let number = Number(input);
  if (number >= 0 && number <= 10) {
    console.log(thaiWords[number]);
  }
  // **** End your program here
  rl.close();
});
