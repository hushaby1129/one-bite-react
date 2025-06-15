console.log("chapter12");

// 1. function expression
function funcA() {
    console.log("funcA");
}

let varA = funcA
console.log(varA);
console.log(varA());

// varB(); // anonymous function can't be hoisting, so it will throw error
// funcB is anonymous function
let varB = function funcB() {
    console.log("funcB");
};
console.log(varB);
varB();
// funcB(); // anonymous function cannot be called

// 2. arrow function
let varC = () => {
    console.log("varC");
    return 1;
}
console.log(varC);
console.log(varC());

let varD = () => 1;
console.log(varD);
console.log(varD());

let varE = (value) => value * 2;
console.log(varE);
console.log(varE(10));

let varF = (value) => {
    console.log(value);
    return value * 2;
}
console.log(varF);
console.log(varF(10));