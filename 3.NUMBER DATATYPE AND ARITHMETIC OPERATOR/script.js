//!==METHODS===

//* 1.tofixed

let amount = 19.999;
let results = amount.toFixed(2);
console.log(results);

//* 2.isNaN

let qty = "50";
console.log(isNaN(qty));

//* 3.Parsefloat/ parseint

let convertedNum = parseFloat(qty);
console.log(convertedNum);
console.log(qty); //this is representing string so in the console it appears in black color

//!==ARITHMETIC OPERATORS===

//* 1.Addition

let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(result);

//* 2.Subtraction

let n3 = 30;
let n4 = 12;
let res = n3 - n4;
console.log(res);

//* 3.Multiplication

let m1 = 20;
let m2 = 11;
let Multiplication = m1 * m2;
console.log(Multiplication);

//* 4.Division

let d1 = 300;
let d2 = 10;
let division = d1 / d2;
console.log("Average of division is", division);

//* 5.Modulus

let mod1 = 11;
let mod2 = 2;
let modulusval = mod1 % mod2;
console.log(modulusval);

//* 6.Increment

let inc1 = 10;
inc1++;
console.log(inc1);

//* 7.Decrement

let decre1 = 11;
decre1--;
console.log(decre1);

//* 8.Exponentiation (**) : raises one number to the power of another

let onenum = 2;
let secondnum = 3;
let expoOfNum = onenum ** secondnum;
console.log(expoOfNum);

//!-- Case study: budget management---
// a user wants to track his monthly expenses using javascript program . the user has a income and several expenses like rent, groceries, utilities, entertainment. the program needs to cal how much is spent , how much is saved , wt is the percentage of the income has been spent.

/* 
-Monthly income : 3000;
-Monthly expenses:
-rent: 200;
-groceries:600;
-utilities:300;
-entertainment:200;

1. calculate the total expenses
2.calculate the remaining savings after expenses.
3. calculate the percentage of income spent.
*/

//* total expenses
let rent = 200;
let groceries = 600;
let entertainment = 200;
let utilities = 300;
let TOTAL = rent + groceries + utilities + entertainment;
console.log("total expense is", TOTAL);

//* remaining savings
let MonthlyIncome = 3000;
let remaingsavings = MonthlyIncome - TOTAL;
console.log("remaing savings after expenses", remaingsavings);

//* percentage of income spent- cal the percentage of income spent using division and multiplication operators

let percentagespent = ((TOTAL / MonthlyIncome) * 100).toFixed(2);
console.log(percentagespent);
//let final = percentagespent.toFixed(2);
//console.log(final); -this another way
