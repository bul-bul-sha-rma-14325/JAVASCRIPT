//!== comparison operator===

let val1 = 10;
let val2 = 20;
//let val2 = "10";

//(==)equal
let final1 = val1 == val2;
//console.log(final1);
// but here it will show true

//(===)strict equal
let final2 = val1 === val2; // if val2 is string then here it will show false

//(!=)not equal
let final3 = val1 != val2;

//(!==)strictly not equal
let final4 = val1 !== "10";

//(>)greater than
let greaterthan = val1 > val2;
console.log(greaterthan);

//(>=)
let greaterthanoreqal = val2 >= val1;
console.log(greaterthanoreqal);

//(<)smaller than
let smaller = val1 < val2;
console.log(smaller);

//(<=)
let smallerthanoreqal = val2 <= val1;
console.log(smallerthanoreqal);
