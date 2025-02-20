const { Sum } = require("./Sum");

const { Multiply } = require("./multiply");
const data = require("./data.json");
const util = require("node:util");

console.log(JSON.stringify(data));
console.log(data);
Sum(8, 2);

Multiply(10, 20);
