console.log("chapter14");

// async
// async keyword make function to be asynchronous
// => async keyword make function return promise
async function getData() {
    /*
    return {
        name: "gil dong hong",
        age: 25
    };
    */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "gil dong hong",
                age: 25
            });
        }, 1_500);
    });
}
/*
console.log(getData());
getData().then((data) => {
    console.log(data);
});
*/

// await
// await keyword can be used in async function
// => await keyword wait other async function to be finished
async function printData() {
    console.log("printData start");
    console.log(await getData());
    // console.log(getData());
    console.log("printData end");
}
printData();