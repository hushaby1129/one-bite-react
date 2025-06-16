console.log("chapter04");

// spread, rest operator
// 1. spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    c: 3,
    ...obj1,
    d: 4
}
console.log(obj2);

function func(p1, p2, p3) {
    console.log(p1, p2, p3);
}
func(...arr1);
func(arr1);

// 2. rest operator
function func1(one, ...rest) {
    console.log("### rest")
    console.log(one)
    console.log(rest);
}
func1("one", ...arr1)