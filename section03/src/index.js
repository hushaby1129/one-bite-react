/*
// use commonjs
const mathModule = require("./math.js");
const {add, sub, mul, div, modular} = require("./math.js");

console.log("hello Node.js");
console.log(mathModule);
console.log(mathModule.add(1, 2));
console.log(mathModule.sub(1, 2));
console.log(mathModule.mul(1, 2));
console.log(mathModule.div(1, 2));
console.log(mathModule.modular(1, 2));

console.log("###########################################")

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));
console.log(modular(1, 2));
*/

/*
import {add, sub, mul, div, mod} from "./math.js";
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));
console.log(mod(1, 2));

import defaultFunc from "./math.js";
defaultFunc();
*/

import randomColor from "randomcolor";
console.log(randomColor());
