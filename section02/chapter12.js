console.log("chapter12");

// async callback
function task() {
    setTimeout(() => {
        console.log("hello");
    }, 2_000);
}
task();

function add(a, b) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 2_000);
}
add(1, 2);

function add1(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
        callback(sum);
    }, 2_000);
}
add1(1, 2, (value) => {
    console.log("#### callback() value : " + value);
});

// example
function order(callback) {
    setTimeout(() => {
        console.log("order");
        const food = "chicken";
        callback(food)
    }, 2_000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        console.log("cooldownFood");
        const cooldownFood = `cooldown ${food}`;
        callback(cooldownFood);
    }, 2_000)
}

function freezeFood(food, callback) {
    setTimeout(() => {
        console.log("freezeFood");
        const freezeFood = `cooldown ${food}`;
        callback(freezeFood);
    }, 2_000)
}

// callback hell => to improve callback hell use promise or async/await
order((food) => {
    console.log("#### food : " + food);
    cooldownFood(food, (cooldownFood) => {
        console.log("#### let eat food : " + cooldownFood);
        freezeFood(cooldownFood, (freezeFood) => {
            console.log("#### freeze food complete // food : " + freezeFood);
        });
    });
})