console.log("chapter07");

// operator1
// 1. assignment operator
let var1 = 1;
console.log(var1);

// 2. arithmetic operator
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
console.log(num1, num2, num3, num4, num5);

let num6 = 3 + 2 * 10;
console.log(num6);

let num7 = (3 + 2) * 10;
console.log(num7);

let num8 = 3 ** 2;
console.log(num8);

// 3. compound assignment operator
let num9 = 10;
num9 = num9 + 20;
console.log(num9);
num9 += 20;
console.log(num9);
num9 -= 20;
console.log(num9);
num9 *= 20;
console.log(num9);
num9 /= 20;
console.log(num9);
num9 %= 20;
console.log(num9);

// 4. increment and decrement operator
let num10 = 10;
console.log(num10++); // prefix operation
console.log(num10--);
console.log(++num10); // postfix operation
console.log(--num10);
console.log(num10)

// 5. logical operator
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. comparison operator
let comp1 = 1 === 2; // value and type comparison
let comp2 = 1 !== 2;
let comp3 = 1 > 2;
let comp4 = 1 < 2;
let comp5 = 1 >= 2;
let comp6 = 1 <= 2;
console.log(comp1, comp2, comp3, comp4, comp5, comp6);

let comp7 = 1 == "1"; // only value comparison
console.log(comp7);
