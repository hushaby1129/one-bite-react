console.log("chapter11");

// sync & async
console.log("1");

// async process run on Web APIs not Thread
setTimeout(() => {
    console.log("2");
}, 3_000);

console.log("3");

