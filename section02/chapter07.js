console.log("chapter07");

// array elements handling
// 1. push - add element end of the array, O(1)
let arr1 = [1, 2, 3];
let newLength = arr1.push(4, 5, 6, 7);
console.log(arr1);
console.log(newLength);
console.log("################################");

// 2. pop - remove and return element end of the array, O(1)
let arr2 = [1, 2, 3];
let poppedItem = arr2.pop();
console.log(arr2);
console.log(poppedItem);
console.log("################################");

// 3. shift - remove and return element start of the array, O(n)
let arr3 = [1, 2, 3];
let shiftedItem = arr3.shift();
console.log(arr3);
console.log(shiftedItem);
console.log("################################");

// 4. unshift - add element start of the array, O(n)
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(-2, -1, 0);
console.log(arr4);
console.log(newLength2);
console.log("################################");

// 5. slice - return new array of specific ranged array, O(n)
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(1, 3); // index: 1, 2
console.log(sliced);
let sliced2 = arr5.slice(1); // index: 1 ~ end
console.log(sliced2)
let sliced3 = arr5.slice(-3); // index: end ~ -3
console.log(sliced3)
console.log("################################");

// 6. concat - return new array of concatenation of two arrays, O(n)
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let concat = arr6.concat(arr7);
console.log(concat);
console.log("################################");

// 7. splice - return new array of specific ranged array, O(n)
let arr8 = [1, 2, 3, 4, 5];
let spliced = arr8.splice(1, 3); // index: 1, 2
console.log(arr8);
console.log(spliced);
