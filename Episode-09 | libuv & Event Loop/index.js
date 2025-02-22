const fs = require("fs");
const a = 100;

setImmediate(() => {
  console.log("setImmediate called");
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Read SuccessFully" + data);
});

setTimeout(() => {
  console.log("Time Expired");
}, 0);

function printA() {
  console.log("a : ", a);
}
printA();

console.log("Last line of the File");
