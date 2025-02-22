const fs = require("fs");

const a = 100;

setImmediate(() => console.log("Set Immediate"));

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Reading CB: " + data);
});

setTimeout(() => console.log("Time Expired"), 0);

process.nextTick(() => console.log("process.nextTick"));
Promise.resolve("Resolved").then(console.log);

function printA() {
  console.log("a : ", a);
}

printA();

console.log("Last Line of the Code");

//Output expected :

// a : 100
// Last Line of the Code
//process.nextTick
// Promise
// Time Expired
// Set Immediate
// File Reading CB : data
