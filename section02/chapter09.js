console.log("chapter09");

// array manipulation
// 1. filter
// return new array which is fulfilled conditions
let arr1 = [
    {name: "test1", hobby: "tennis"},
    {name: "test2", hobby: "tennis"},
    {name: "test3", hobby: "read a book"},
]
const tennisPeople = arr1.filter((item) => {return item.hobby === "tennis";});
console.log(tennisPeople);
const tennisPeople1 = arr1.filter((item) => item.hobby === "tennis");
console.log(tennisPeople1);

// 2. map
// iterate all element of array, execute each callback function and return new array which result of callback functions collection
let arr2 = [1, 2, 3, 4, 5];
const mapArr1 = arr2.map((value, index, array) => {
    return value * 2;
});
console.log(mapArr1)

const mapArr2 = arr1.map(item => item.name);
console.log(mapArr2)

// 3. sort
// sort array element lexicographical asc
let arr3 = ["c", "a", "b"];
arr3.sort();
console.log(arr3);

let arr4 = [16, 2, 1, 15, 3, 14]; // sort() is not working.
// because it cast to string and sort. sort() check first letter of value.
// 16's first letter 1 is lower than 2. sort() 16 and 2 return 16, 2
// let arr4 = [10, 5, 3];
arr4.sort();
console.log(arr4);

arr4.sort((a, b) => {
    if (a > b) {
        // change position a, b to b, a
        return 1;
    } else if (a < b) {
        // change position b, a to a, b
        return -1;
    } else {
        // do nothing
        return 0;
    }
})
// arr4.sort((a, b) => a - b);
console.log(arr4);

// 4. toSorted
// it functionally same as sort() but sort() is sorting it self. but toSorted() is return new array.
let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted()
console.log(sorted)

// 5. join
// concat all element to the one string and return
let arr6 = ["c", "a", "b"];
const joined = arr6.join();
console.log(joined);
const joined1 = arr6.join("-");
console.log(joined1);

const joined2 = arr1.join();
console.log(joined2);
