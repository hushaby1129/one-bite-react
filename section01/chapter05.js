console.log("chapter05");

// primitive type
// 1. number
let num1 = 10;
let num2 = 20;
let num3 = -30;

console.log("number")
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // it called modular calculation


let inf = Infinity;
let mInf = -Infinity;
console.log(inf);
console.log(mInf);

let nan = NaN; // not a number
console.log(nan);
console.log(10 * "hello");

// 2. string
let myName = "gil dong hong";
let myLocation = "seoul";
let introduce = myName + " " + myLocation;
console.log(introduce);

let introduce2 = `${myName} ${myLocation}`; // template literal
console.log(introduce2);

// 3. boolean
let isSuccess = false;
let isEmpty = true;
console.log(isSuccess);
console.log(isEmpty);

// 4. null
let empty = null;
console.log(empty);

// 5. undefined
let undefined1;
console.log(undefined1);

let undefine2 = undefined;
console.log(undefine2);
