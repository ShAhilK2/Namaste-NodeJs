// require("/path")
//All the code of the module is wrapped inside a function IIFE
//IIFE immediately Invoked Function Expression
//Privacy : Keep Var and Fnction Safe

(function (module, require) {
  // require("/path");

  // All code of the module uns inside here
  //   function Multiply(a, b) {
  //     const result = a * b;
  //     console.log(result);
  //   }

  //   module.exports = { Multiply };

  console.log("IIFE");
  setTimeout(() => {
    console.log("SetTimeOut");
  }, 2000);
})();

console.log(__filename);

console.log(__dirname);
