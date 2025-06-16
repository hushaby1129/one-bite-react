console.log("chapter03");

// Destructuring assignment (구조 분해 할당)
// 1. array destructuring assignment (구조 분해 할당)
let arr = [1, 2, 3];
let one = arr[0];
let two = arr[1];
let three = arr[2];
console.log(one, two, three);

let [one1, two1, three1] = arr;
console.log(one1, two1, three1);
let [one2, two2, three2, four2] = arr;
console.log(one2, two2, three2, four2);
let [one3, two3, three3, four3 = 4] = arr;
console.log(one3, two3, three3, four3);

// 2. object destructing assignment (객체 분해 할당)
let person = {
    name: "gil dong hong",
    age: 25,
    hobby: "tennis"
}
/*
let name = person.name;
let age = person.age;
let hobby = person.hobby;
console.log(name, age, hobby);
 */

let {name, age, hobby, extra = 10} = person;
console.log(name, age, hobby, extra);
let {name: name1, age: age1, hobby: hobby1, extra: extra1 = 10} = person;
console.log(name1, age1, hobby1, extra1);

// 3. how to get function parameter by using object destructing assignment
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}
func(person);
func({name99: 1, age: 2, hobby: 3, extra: 4});