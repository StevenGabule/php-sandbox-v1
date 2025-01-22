let objectA = {a: 1, b: 2};
Object.assign(objectA, {c: 3, d: 4});
console.log(objectA);
console.log(Object.keys(objectA));
console.log(Object.entries(objectA).flat());

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false
object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;

// This isn't allowed
score = {visitors: 1, home: 1};

