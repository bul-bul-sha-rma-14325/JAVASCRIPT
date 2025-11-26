//keyword(let, var, const)
//variable name(container name)
//value

//variable declaration and initialization
let age = 24;
console.log(age);

//declaration and initialization in one line
let age1 = 30;

//declaration first then assignment
let country;
country = "India";
console.log(country);

//multiple declarations then assignment
let age2 = 24,
  fullname = "Bulbul",
  Country = "INDIA";

//!--PRIMITIVE DATA TYPES---

//* 1.number
let Rollno = 121;
console.log(typeof Rollno);

//* 2.string
let firstname = "BULBUL";
console.log(typeof firstname);

//* 3.Boolean
let isStudent = true;
console.log(typeof isStudent);

//* 4.Undefined
let countrynew;
console.log(typeof countrynew);

//* 5.Null
let payment = null;
console.log(typeof payment);

//!--NON-PRIMITIVE DATA TYPE--

//* 1.Arrays
let fruits = ["Apple", "banana", "mango"];
let mixedData = [true, 24, 199.99, "Mohan", [1, 2, 3]];

//*Objects
let person = {
  Firstname: "MOHAN",
  Lastname: "SHARMA",
  Age: 30,
};

//!--DIFFERENCE BETWEEN LET AND CONST---

//* LET
let carname = "honda";
carname = "benz"; //reassigned
console.log(carname);

//*CONST
const amount = 100;
//amount = 200; here you cannot reassign another value
console.log(amount);
