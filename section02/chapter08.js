console.log("chapter08");

// array iteration
// 1. forEach
// iterate all elements of array and do something
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function(item, index, array) {
    // console.log(item, index, array);
    // console.log(item * 2)
    console.log(array[index] * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
console.log(doubledArr);
console.log("###############################");

// 2. includes
// check if array includes value
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.includes(3));
console.log(arr2.includes(6));
console.log("###############################");

// 3. indexOf
// get index of value
console.log(arr2.indexOf(3));
console.log(arr2.indexOf(6));
console.log("###############################");

// 4. findIndex
// iterate all elements and get index which fulfilled callback function's condition
console.log(arr2.findIndex(item => item === 3));
console.log(arr2.findIndex(item => item === 6));
let objArr = [
    {age: 20, name: "20"},
    {age: 30, name: "30"},
    {age: 40, name: "40"}
]
console.log(objArr.findIndex(item => item.age === 40));
console.log("###############################");

// 5. find
// iterate all elements and return element which fulfilled callback function's condition
let obj = objArr.find(item => item.age === 30);
console.log(obj);
