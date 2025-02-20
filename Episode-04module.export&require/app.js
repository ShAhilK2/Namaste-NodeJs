// require("./index"); //one module into another
// const obj = require("./CalculateSum");
// obj.CalculateAdd(10, 20);
// console.log(obj.greet);
// const { CalculateAdd, greet } = require("./CalculateSum");
// CalculateAdd(20, 30);
// console.log(greet);
import { CalculateSum, greeting } from "./CalculateSum.js";
import { Sum, multiply } from "./Calculator/app.js";

CalculateSum(10, 20);
console.log(greeting);

console.log("App File ");
