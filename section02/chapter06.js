console.log("chapter06");

// iteration
// 1. array iteration
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("######################");
for (let i of arr) {
    console.log(i);
}
console.log("######################");

let obj = {
    name: "gil dong hong",
    age: 25,
    hobby: "tennis",
    job: "developer"
}
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + " : " + obj[keys[i]]);
}
console.log("######################");
for (let key of keys) {
    console.log(key + " : " + obj[key]);
}
console.log("######################");
for (let key in obj) {
    console.log(key + " : " + obj[key]);
}
console.log("######################");
let values = Object.values(obj);
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
console.log("######################");
for (let value of values) {
    console.log(value);
}
console.log("######################");
for (let value of Object.values(obj)) {
    console.log(value);
}
