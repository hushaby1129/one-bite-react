console.log("chapter03");

// object1
// 1. create object
let obj1 = new Object(); // object constructor
let obj2 = {}; // object literal

// 2. add property {key : value}
let person = {
    name: "gil dong hong",
    age: 20,
    hobby: "tennis",
    propertyFn: () => { // use function expression as value
        console.log("propertyFn");
    },
    10: "20", // use number as key
    "use blank": true // use blank string as key
};

// 3. handle object property
// 3-1-1. access value by dot notation
let name = person.name;
console.log(person.name);
console.log(person.nokey); // get value by not existed key returns undefined

// 3-1-2. access value by bracket notation
console.log(person["use blank"]);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. add property
person.newProperty = "new property";
console.log(person);
console.log(person.newProperty);

// 3-3. update property
person.hobby = "basketball";
console.log(person);
console.log(person.hobby);

// 3-4. delete property
delete person.hobby;
console.log(person);
console.log(person.hobby);
delete person["use blank"];
console.log(person);
console.log(person["use blank"]);

// 3-5. check property exist in object
console.log("name" in person);
console.log("nokey" in person);
