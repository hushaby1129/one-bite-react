console.log("chapter02");

// short circuit evaluation
function returnTrue() {
    console.log("returnTrue()");
    return true;
}
function returnFalse() {
    console.log("returnFalse()");
    return false;
}

console.log(returnTrue() && returnFalse());
console.log("############################")
console.log(returnFalse() && returnTrue());
console.log("############################")
console.log(returnTrue() || returnFalse());
console.log("############################")
console.log(returnFalse() || returnTrue());

console.log("############################")
function returnTruthy() {
    console.log("returnTruthy()");
    return 10;
}
function returnFalsy() {
    console.log("returnFalsy()");
    return undefined;
}
console.log(returnTruthy() && returnFalsy());
console.log("############################")
console.log(returnFalsy() && returnTruthy());
console.log("############################")
console.log(returnTruthy() || returnFalsy());
console.log("############################")
console.log(returnFalsy() || returnTruthy());
console.log("############################")

// example
function printPerson(person) {
    if (!person) {
        console.log("person value error");
        return;
    }
    console.log(person.name);
}
function printPerson1(person) {
    console.log(person && person.name)
}
function printPerson2(person) {
    const name = person && person.name;
    console.log(name || "name value error");
}
printPerson(null);
printPerson1();
printPerson1(null);
printPerson1(undefined);
printPerson1({});
printPerson1({name: "gil dong hong"});
printPerson2(null);
printPerson2({name: "gil dong hong"});