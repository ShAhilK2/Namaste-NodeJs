const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Time Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  setTimeout(() => console.log("2nd Timer"), 0);
  process.nextTick(() => console.log("2nd nextTick"));
  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log(" inner nextTick"));
  console.log("nextTick");
});
console.log("Last line of the file:");

//Output will be
// Last line of the file
// nextTick
//  inner nextTick
// Promise
// Timer Expired
// setImmediate
// File Reading CB
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer
