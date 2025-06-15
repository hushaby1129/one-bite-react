console.log("chapter04");

// 1. variable
let age;
console.log(age); // undefined

age = 30;
console.log(age);

// Uncaught SyntaxError: Identifier 'age' has already been declared
// let age = 40;
// console.log(age);

// 2. const
const title = "onebite react";
console.log(title);

// 3. naming rule
// 3-1. can't use any special characters except $, _
let $_name = "onebite";

// 3-2. can't use number as first character
// let 1name = 111;

// 3-3. can't use reserved words
// let let = "let"; // Uncaught SyntaxError: let is disallowed as a lexically bound name
// let var = "var";

// 4. naming rule guide
let salesCount = 5;
let refundCount = 2;
let totalCount = a - b;
console.log(totalCount);
