console.log("Calculate Sum Exceuted");

// Modules Protect thier variables and functions from leaking and also protect from conflicts

export let greeting = "Hello World";
export function CalculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// console.log(module.exports); {}
// module.exports.greeting = greeting;
// module.exports.CalculateSum = CalculateSum;

// module.exports = {
//   CalculateAdd: CalculateSum,
//   greet: greeting,
// };
