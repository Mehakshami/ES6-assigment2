// find function position return
let data = [10, 20, 7, 100, 50, 1];
let result = data.find(function (item) {
    return item < 50;
});
console.log(result); // Output: 10

// findIndex function value return
let results = data.findIndex(function (item) {
    return item < 50;
});
console.log(results); // Output: 0 (index of 10)

// find function position return
let result4 = data.find((item) => {
    return item < 7;
});
console.log(result4); // Output: 1 (first item less than 7)

// find & findIndex ke under use karsakta ha obj and custom function
let datas = [
    { id: 1 },
    { id: 100 },
    { id: 20 },
    { id: 10 },
    { id: 50 },
    { id: 7 },
];

function custom(item) {
    return item.id > 50;
}
let result3 = datas.find(custom);
console.log(result3); // Output: { id: 100 }

// Arrow function in detail
let text = [10, 20, 30, 40, 50, 60];
// name function 1
function test() {
    return 1;
}
// Anonymous function
let test2 = function () {
    return 1;
};
// Arrow function
let test3 = () => {
    return 1;
};
console.log(test2()); // Output: 1
console.log(test3()); // Output: 1

// Complex example
let newdata = text.map((item) => item * 2);
console.log(newdata); // Output: [20, 40, 60, 80, 100, 120]

// Arrow function example with `this`
let arrrow = {
    name: "John",
    age: 30,
    test1: function () {
        console.log(this); // Output: arrrow object (normal function binds `this` to the object)
    },
    text3: () => {
        console.log(this); // Output: `undefined` or the global object, because arrow functions do not bind `this`
    },
};
arrrow.test1();
arrrow.text3();

// Classes
class fruit {
    name = "Apple";
    constructor() {
        console.log(this.name); // Output: "Apple"
    }
    getfruit() {
        return "item";
    }
}
let f1 = new fruit();
console.log(f1.getfruit()); // Output: "item"
