'use strict';

console.log(10 === 10.0); // true
console.log(0.1 + 0.2 === 0.3); // false

console.log(Number('10')); // 10
console.log(+'10'); // 10
console.log(Number.parseInt('11', 10));
console.log(Number.parseInt('11 sec', 10));
console.log(Number.parseFloat('11.5', 10));
console.log(Number.parseFloat('11.5 sec', 10));