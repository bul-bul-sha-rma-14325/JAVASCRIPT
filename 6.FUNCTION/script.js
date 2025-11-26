//! Steps of creating and using a function

//! Define the function(declared)
function addnumbers() {
  //! write our code in the function
  let a = 10;
  let b = 20;
  let result = a + b;
  console.log(result);
}
//! call/use the function //function invocation
addnumbers();

//!=====FUNCTION PARAMETER (inputs)=======
function sumofnumbers(a, b) {
  //function declaration with parameter
  let results = a + b;
  console.log(results);
}
sumofnumbers(40, 20);
sumofnumbers(100, 290);

//!===RETURN KEYWORD====
function addNum(a, b) {
  let results = a + b;
  return results;
}
let ans = addNum(10, 30);
console.log(ans);
alert(ans);

//!===FUNCTION EXPRESSION=====
const addNumbers = function (a, b) {
  //const is mainly used with function
  let Result = a + b;
  return Result;
};
let answer = addNumbers(19, 20);
console.log(answer);
alert(answer);

//!===ARROW FUNCTION====

//* method 1

//const sum = (a, b) => {
// let result1 = a + b;
//  return result1;
//};

//* method2
const sum = (a, b) => a + b;

let answer1 = sum(11, 12);
console.log(answer1);

//!===ANONYMOUS FUNCTION=====
//declared
(function (a, b) {
  let result2 = a + b;
  console.log(result2);
})(10, 20);

//!===DEFAULT PARAMETER=====
const multiply = function (a = 1, b = 2) {
  let product = a * b;
  console.log(product);
};
multiply(10, 20);
