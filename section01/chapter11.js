console.log("chapter11");

// function
function greeting() {
    console.log("hello");
}

console.log("before function call")
greeting();
console.log("after function call")

function getArea() {
    let width = 10;
    let height = 20;
    let area = width * height;
    console.log("#### " + area);
}

getArea();

function getArea1(width, height) {
    return width * height;
}

let area = getArea1(100, 200);
console.log("@@@@ " + area);

function function1 () {
    // nested function
    function function2 () {
        console.log("function2");
    }
    function2();
    console.log("function1");
}
function1();

// hoisting
// function declaration are moved to the top of the scope
let a = getA();
function getA() {
    return "A";
}
