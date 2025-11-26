//? Ways of creating strings

//* single quotes string (' ')
let singleQuotesString = "hello today we are learning about creating strings";

//* double quotes string (" ")
let doubleQuotesString = "hello today we are learning about creating strings";

//* template Literal String(` `)
let templateLiteralString = `hello today we are learning about creating strings`;

//* string length
let stringlength = singleQuotesString.length;
console.log(stringlength);

//* accessing character
let acessingCharcater = doubleQuotesString[1];
console.log(acessingCharcater);

//* convert to uppercase
let touppercase = doubleQuotesString.toUpperCase();
console.log(touppercase);

//* convert to lowercase
let tolowercase = doubleQuotesString.toLowerCase();
console.log(tolowercase);

//* find index of
let indexof = singleQuotesString.indexOf("learning");
console.log(indexof);

//* slice by indices
let sliceof = singleQuotesString.slice(5, 11);
console.log(sliceof);

//* replace a string
let replacedstring = singleQuotesString.replace("hello", "Welcome");
console.log(replacedstring);

//* concat
let firstname = "bulbul";
let lastname = "sharma";
// let fullname = firstname.concat(" ", lastname);
let fullname = firstname + " " + lastname;
console.log(fullname);

//* template literals
let name = "Bulbul";
let age = 24;
let greeting = `Hello, ${name}, your age is ${age} years , good morning`;
console.log(greeting);
