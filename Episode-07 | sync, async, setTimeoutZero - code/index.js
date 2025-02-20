const fs = require("fs");
const https = require("https");
const crypto = require("node:crypto");
console.log("Helllo Started");

function Multiply(a, b) {
  const result = a * b;
  return result;
}

//pbkdf2 => Password Based Key Derevative Function
// Will Block the Main Thread
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is generated");

//Async Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Async Key is generated");
});

//Synchronous Code
const data = fs.readFileSync("./file.txt", "utf-8");
console.log("This will only read after file read : " + data);

console.log("File Sync Read");
setTimeout(() => {
  console.log("Set Time Out after 5 seconds");
}, 5000);

setTimeout(() => {
  //Only Executed when main thread is empty
  console.log("Call me Now"); // Only After Main Thread
}, 0);

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data Fetched Succesfully");
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File : " + data);
});

console.log(Multiply(10, 20));
