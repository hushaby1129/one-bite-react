console.log("chapter01");

// Truthy and Falsy
// 1. Falsy values
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) console.log(f1 + " is falsy");
if (!f2) console.log(f2 + " is falsy");
if (!f3) console.log(f3 + " is falsy");
if (!f4) console.log(f4 + " is falsy");
if (!f5) console.log(f5 + " is falsy");
if (!f6) console.log(f6 + " is falsy");
if (!f7) console.log(f7 + " is falsy");

// 2. Truthy values
// -> except f1 ~ f7
let t1 = 1;
let t2 = "1";
let t3 = {};
let t4 = [];
let t5 = true;
let t6 = new Date();
let t7 = () => {};

if (t1) console.log(t1 + " is truthy");
if (t2) console.log(t2 + " is truthy");
if (t3) console.log(t3 + " is truthy");
if (t4) console.log(t4 + " is truthy");
if (t5) console.log(t5 + " is truthy");
if (t6) console.log(t6 + " is truthy");
if (t7) console.log(t7 + " is truthy");

// 3. example
function printName(person) {
    console.log(person.name);
}

let person = {
    name: "gil dong hong"
}
printName(person);

let person1;
// printName(person1); // occur error

function printName1(person) {
    // if (person === undefined) {
    // if (person === undefined || person === null) {
    if (!person) {
        console.log("person value error");
        return;
    }
    console.log(person.name);
}
printName1(person1);
