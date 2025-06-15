console.log("chapter10");

// loop, iteration
// 1. for
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    if (i === 5) {
        break;
    }
}

// 2. while
let i = 0;
while (i < 10) {
    if (i % 2 === 1) {
        continue;
    }
    i++;
    console.log(i);
}