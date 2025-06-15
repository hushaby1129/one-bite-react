console.log("chapter08");

// operator2
// 1. null merge operator
// -> filter if value exist
// -> filter if value is not null and undefined
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4);
let var5 = var1 ?? var3;
console.log(var5);
let var6 = var2 ?? var3; // return first value
console.log(var6);

let userName = null;
let userNickName = "dh gil";
let displayName = userName ?? userNickName;
console.log(displayName);

// 2. type of operator
// -> get value's type
let var7 = 1;
console.log(typeof(var7));
var7 = "hello world";
console.log(typeof(var7));
var7 = false;
console.log(typeof(var7));

// 3. Ternary operator (삼항연산자)
let var8 = 10;
let var8status = var8 % 2 === 0 ? "even" : "odd";
console.log(var8status);