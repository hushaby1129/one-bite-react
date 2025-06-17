console.log("chapter13");

// promise
// promise state : pending, fulfilled, rejected
/*

const promise = new Promise((resolve, reject) => {
    // async process
    // in promise callback function is called executor

    setTimeout(() => {
        console.log("fulfilled");
        resolve("result");
    }, 2_000);
});

console.log(promise); // pending
setTimeout(() => {
    console.log(promise) // fulfilled
}, 3_000);

const promise1 = new Promise((resolve, reject) => {
    // async process
    // in promise callback function is called executor

    setTimeout(() => {
        // console.log("reject");
        reject("result");
    }, 2_000);
});

console.log(promise1); // pending
setTimeout(() => {
    console.log(promise1) // rejected
}, 3_000);
*/
/*
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // const num = 10;
        const num = null;
        if (typeof num === "number") {
            resolve(num + 10);
        } else {
            reject("not number");
        }
    }, 2_000);
});

promise2
    .then((value) => {
        console.log("#### promise2 then value : " + value);
    }).catch((error) => {
        console.log("#### promise2 catch error : " + error);
    });
*/
function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("not number");
            }
        }, 2_000);
    });
    return promise;
}

/*
add10(10)
    .then((value) => {
        console.log("#### add10 then value : " + value);
        add10(value)
            .then((value1) => {
                console.log("#### add10 add10 then value : " + value1);
            }).catch((error) => {
            console.log("#### add10 add10 catch error : " + error);
        });
    }).catch((error) => {
        console.log("#### add10 catch error : " + error);
    });
*/

add10(10).then((value) => {
    console.log("#### add10 then value : " + value);
    return add10(value);
}).then((value) => {
    console.log("#### add10 then then value : " + value);
    return value;
}).catch((error) => {
    console.log("#### last catch error : " + error);
});