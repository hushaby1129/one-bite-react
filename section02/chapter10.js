console.log("chapter10");

// date object
// 1. how to create Date object
let date1 = new Date();
console.log(date1);

let date2 = new Date("2020-01-01");
console.log(date2);

let date3 = new Date("2020-01-01 10:10:10");
console.log(date3);

let date4 = new Date(2020, 1, 2, 3, 4, 5, 6);
console.log(date4);

// 2. timestamp
// get ms number of from UTC("1970.01.01 00:00:00") time to other time
let ts1 = date1.getTime();
console.log(ts1);

let date5 = new Date(ts1);
console.log(date5);

// 3. get time element from Date object
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let ms = date2.getMilliseconds();

console.log(year, month, date, hour, minute, second, ms);

// 4. manipulate time
date1.setFullYear(2020);
date1.setMonth(11);
date1.setDate(31);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
date1.setMilliseconds(999);
console.log(date1)

// 5. get various time format
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());