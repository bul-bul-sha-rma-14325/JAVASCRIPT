//!===Coding Challenge : simple calculator====
/* create a calculator that performs basic operations like addition, subtraction, multiplication, and division. use different types of functions , suh as function expression and arrow functions, for each operation */

//* ADDITION

const add = function (a, b) {
  let addition = a + b;
  return addition;
};
console.log(add(10, 20));

/*let subtract = a-b;
    let product = a*b;
    let divide = a/b;*/

//similarly using arrow function
const add1 = (a, b) => a + b;
console.log("addition equals=", add1(11, 12));

//* SUBTRACTION
const sub = (a, b) => a - b;
console.log("Subtraction equals=", sub(15, 12));

//* Multiplication
const multiply = (a, b) => a * b;
console.log("Product equals=", multiply(15, 12));

//* Division
const divide = (a, b) => a / b;
console.log("division equals=", divide(150, 10));

//!====coding challenge : character counter tool====
//build a small application where users can input text, and the tool displays the length of the text, converts it to uppercase and lowercase , and slice or replace parts of the text//

//solution

// to find length of the text
function CharacterCount(text) {
  let length = text.length;
  return length;
}
const results = CharacterCount("Javascript");

// to convert it to uppercase

function CharacterCount(text) {
  let converttocapital = text.toUpperCase();
  return converttocapital;
}
const results1 = CharacterCount("Javascript");

// to convert it to lowercase
function CharacterCount(text) {
  let ConverttoSmall = text.toLowerCase();
  return ConverttoSmall;
}
const results2 = CharacterCount("Javascript");

// to perform slice
function CharacterCount(text) {
  let CutText = text.slice(3, 7);
  return CutText;
}
const results3 = CharacterCount(
  "and the tool displays the length of the text, converts it to uppercase and lowercase"
);

//sliced another way
const slicedtxt = function (text, start, end) {
  let sliced = text.slice(start, end);
  return sliced;
};
console.log(slicedtxt("NextJS", 0, 2));

// to perform replace
function CharacterCount(text) {
  let Replacetext = text.replace("display", "show");
  return Replacetext;
}
const results4 = CharacterCount(
  "and the tool displays the length of the text, converts it to uppercase and lowercase"
);

//!=======Coding Challenge : String Formatter====
//Design a tool that takes user input for a string and applies various transformations, like converting it to lowercase or uppercase, counting characters, finding a word's index, and concatenating it with another string///

//SOLUTION

function formatstring(str1, str2) {
  let uppercase = str1.toUpperCase();
  let lowercase = str2.toLowerCase();
  let combined = uppercase + " " + lowercase;
  return combined;
}
console.log("hello", "WORLD");

//!====coding challenge :BMI Calculator=======
//Develop a function -based project where users input their height and weight , and the app calculates their BMI using a function that returns the result. add conditional statements to display health status based in the BMI value///

const calculateBMI = (weight, height) => {
  let bmi = weight / (height * height);
  let status;
  if (bmi < 18.5) {
    status = "underweight";
  } else if (bmi < 24.9) {
    status = "normal weight";
  } else if (bmi < 29.9) {
    status = "overweight";
  } else {
    status = "obese";
  }
  return status;
};
const bmiResult = calculateBMI(30, 1.75);

//!=====coding challenge: Student Grading System==
//-Description: Create a simple application that accepts student marks, calculates if the student has passed , failed , or performed exceptionally based on the defined criteria.
//-Features:
//-input for total possible marks and marks obtained;
//-calculate if the student has passed (>=50%)
//-calculate if the student performed exceptionally(>=80%)
//-compare the student's marks against the class average.
//-display results in a user-friendly format.

//solution

function studentGradingSystem(totalMarks, ObtainedMarks, classAverage) {
  let passingCriteria = totalMarks * 0.5;
  let exceptionalCriteria = totalMarks * 0.8;
  let hasPassed = ObtainedMarks >= passingCriteria;
  let hasPerformedExceptionally = ObtainedMarks >= exceptionalCriteria;
  let isAboveAverage = ObtainedMarks > classAverage;
  return {
    hasPassed,
    hasPerformedExceptionally,
    isAboveAverage,
  };
}
const result = studentGradingSystem(500, 470, 350);
