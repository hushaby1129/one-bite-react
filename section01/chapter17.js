console.log("chapter17");

// array
// 1. create array
let arr1 = new Array(); // array constructor
let arr2 = []; // array literal
let arr3 = [1, 2, true, "four", undefined, null, () => {}, {}, []];

// 2. access array elements
let item1 = arr3[0];
let item2 = arr3[3];
console.log(item1, item2);

arr3[0] = "hello";
console.log(arr3);