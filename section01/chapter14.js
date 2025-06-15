console.log("chapter14");

// scope
// global scope, local scope
// global scope is can access from everywhere
// local scope is can access from specific area

let a = 1; // global scope
function funcA() {
    console.log(a);
    let b = 2; // local scope
    console.log(b);
}
funcA();
// console.log(b); // can't access

if (true) {
    let c = 3; // local scope
}
// console.log(c);

for (let i = 0; i < 10; i++) {
    let d = 4; // local scope
}
// console.log(i); // local scope

function funcB() {
    console.log("funcB()");
    function funcC() { // local scope
        console.log("funcC()");
    }
}
// funcC();