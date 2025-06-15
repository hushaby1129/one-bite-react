console.log("chapter16");

// object2
// 1. constant object
const animal = {
    type: "cat",
    name: "kitty",
    age: 10,
    color: "black"
};

// animal = {age: 12}; // error - constant object can't be changed'
animal.newProperty = "new property"; // add property
animal.age = 15; // update property
delete animal.color; // delete property

console.log(animal);

// 2. method object
// -> property that is function
const person = {
    name: "gil dong hong",
    sayHello: () => {
        console.log("hello");
    },
    sayBye() { // method declaration
        console.log("bye");
    }
}

person.sayHello();
person.sayBye();
person["sayHello"]();