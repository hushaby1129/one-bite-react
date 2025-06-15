console.log("chapter09");

// condition statement
// 1. if condition statement
let num = 10;
// num = 9
// num = 11
if (num < 10) {
    console.log(num + " < 10");
} else if (num === 10) {
    console.log(num + " = 10");
} else {
    console.log(num + " > 10");
}

// 2. switch condtion statement
// -> functionally equal as if condition statement but more intuitive
let animal = "cat";

switch (animal) {
    case "cat":
        console.log("meow");
        break;
    case "dog":
        console.log("bark");
        break;
    case "bird":
        console.log("chirp");
        break;
    default:
        console.log("unknown animal");
}