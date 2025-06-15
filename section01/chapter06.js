console.log("chapter06");

// type conversion
// 1. implicit type conversion (묵시적 형변환)
// -> auto type casting by javascript engine
let num = 10;
let str = "20";
const result = num + str;
console.log(result);

// 2. explicit type conversion (명시적 형변환)
// -> type casting by programmer using built-in function
// string to number
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);

// number to string
let num1 = 10;
let numToStr1 = String(num1);
console.log(numToStr1 + " is a string");