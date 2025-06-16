console.log("chapter05");

// primitive type vs object type
// immutable vs immutable
let o1 = {
    name: "gil dong hong"
}
let o2 = o1; // shallow copy
// o2.name = "anonymous";
// console.log("o1.name: " + o1.name); // unintentional change

console.log("########################");
let o3 = {...o1}; // deep copy
o3.name = "gil dong hong3";
console.log("o3.name: " + o3.name);
console.log("o1.name: " + o1.name);

console.log("########################");
console.log("o1 === o2 - " + (o1 === o2)); // check by reference, shallow comparison
console.log("o1 === o3 - " + (o1 === o3));
console.log("o2 === o3 - " + (o2 === o3));
console.log(JSON.stringify(o1) === JSON.stringify(o2)); // check by property and value, deep comparison
console.log(JSON.stringify(o1) === JSON.stringify(o3));
console.log(JSON.stringify(o2) === JSON.stringify(o3));
