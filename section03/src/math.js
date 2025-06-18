// simple math module
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
// module
export function div(a, b) {
    return a / b;
}
// module
export function mod(a, b) {
    return a % b;
}

export default function defaultFunc() {
    console.log("math.js default function");
}
/*
// commonjs
module.exports = {
    add,
    sub,
    mul,
    div,
    modular: mod // rename, property name: function
}
*/
// module
export {add, sub, mul};
