'use strict';
//  const weather = new Map()
//  weather.set('London', 10).set('Moscow', 1);
//  console.log(weather)
//  console.log(weather.get('Moscow'))
//  console.log(weather.get('Not found'))
//  console.log(weather.has('Moscow'))
//  console.log(weather.has('Not found'))
//  console.log(weather.delete('Moscow'))
//  console.log(weather)

//  weather
//  .set(1,5);

const weatherObject = {
	london: 10,
	moscow: 7,
	paris: 15
};

// const weather2 = new Map(Object.entries(weatherObject))
// console.log(weather2);
// console.log(weather2.size);

// const weather = new Map(Object.entries(weatherObject))
// for (const [key, value] of weather) {
// 	console.log(key, value);
// }

// console.log([...weather.keys()])
// console.log([...weather.values()])

// const weather = new Map([...Object.entries(weatherObject)].map(el => el.reverse()))
// console.log(weather)
let a = { a: 1 }
let b = { b: 1 }
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map)
console.log(map.get(a))
console.log(map.has(a))
console.log(map.delete(a))

a = null;

setTimeout(() => {
	console.log(map)
}, 1000)

let cache = new WeakMap()

function getValue(obj) {
	if (!cache.has(obj)) {
		const res = 1;
		cache.set(obj, res)
	}
	return cache.get(obj)
}

const res = getValue(a);
console.log(res);
