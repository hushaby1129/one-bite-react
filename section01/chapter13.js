console.log("chapter13");

// callback function
// 1. what is callback function?
function main(value) {
    // console.log(value);
    console.log("main function start");
    console.log("main function is running");
    console.log(value());
    console.log("main function end");
}

// main(1);

function sub() {
    console.log("sub function");
}

main(sub);

main(() => {
    console.log("callback function");
});

// 2. usage of callback function
function repeat(count) {
    console.log("#############################");
    for (let i = 1; i <= count; i++) {
        console.log(i);
    }
}

function repeatDouble(count) {
    console.log("#############################");
    for (let i = 1; i <= count; i++) {
        console.log(i * 2);
    }
}

function repeatTriple(count) {
    console.log("#############################");
    for (let i = 1; i <= count; i++) {
        console.log(i * 3);
    }
}

repeat(5);
repeatDouble(5);
repeatTriple(5);

function repeatCallback(count, callback) {
    console.log("#############################");
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeatCallback(5, (value) => {
    console.log(value);
});

repeatCallback(5, (value) => {
    console.log(value * 2);
});

// just only one parameter in callback function then can omit the ()
repeatCallback(5, value => {
    console.log(value * 3);
});

