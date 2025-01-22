const JOURNAL = [
	{ "events": ["carrot", "exercise", "weekend"], "squirrel": false },
	{ "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false },
	{ "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false },
	{ "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
	{ "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false },
	{ "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false },
	{ "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
	{ "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false },
	{ "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false },
	{ "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false },
	{ "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false },
	{ "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["brushed teeth", "computer", "work"], "squirrel": false },
	{ "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["brushed teeth", "work"], "squirrel": false },
	{ "events": ["cauliflower", "reading", "weekend"], "squirrel": false },
	{ "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
	{ "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false },
	{ "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
	{ "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false },
	{ "events": ["spaghetti", "nachos", "work"], "squirrel": false },
	{ "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
	{ "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true },
	{ "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
	{ "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["potatoes", "exercise", "work"], "squirrel": false },
	{ "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false },
	{ "events": ["lasagna", "ice cream", "work"], "squirrel": false },
	{ "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false },
	{ "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false },
	{ "events": ["potatoes", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["carrot", "work"], "squirrel": false },
	{ "events": ["pizza", "beer", "work", "dentist"], "squirrel": false },
	{ "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false },
	{ "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
	{ "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false },
	{ "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false },
	{ "events": ["lasagna", "peanuts", "work"], "squirrel": true },
	{ "events": ["pizza", "work"], "squirrel": false },
	{ "events": ["potatoes", "exercise", "work"], "squirrel": false },
	{ "events": ["brushed teeth", "exercise", "work"], "squirrel": false },
	{ "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false },
	{ "events": ["pizza", "cycling", "weekend"], "squirrel": false },
	{ "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false },
	{ "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true },
	{ "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false },
	{ "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false },
	{ "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false },
	{ "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false },
	{ "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
	{ "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false },
	{ "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false },
	{ "events": ["bread", "candy", "work"], "squirrel": false },
	{ "events": ["potatoes", "nachos", "work"], "squirrel": false },
	{ "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false },
	{ "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false },
	{ "events": ["brussel sprouts", "running", "work"], "squirrel": false },
	{ "events": ["brushed teeth", "work"], "squirrel": false },
	{ "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["candy", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false },
	{ "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
	{ "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false },
	{ "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false },
	{ "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
	{ "events": ["pizza", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true },
	{ "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false },
	{ "events": ["brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false },
	{ "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false },
	{ "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["carrot", "reading", "weekend"], "squirrel": false },
	{ "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true },
	{ "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false },
	{ "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false },
	{ "events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false },
	{ "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
	{ "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false },
	{ "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }
];

let journal = [];

function addEntry(events, squirrel) {
	journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
			(table[0] + table[1]) *
			(table[1] + table[3]) *
			(table[0] + table[2]));
}
// console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}

	return table;
}

function journalEvents(journal) {
	let events = []
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

// console.log(tableFor('pizza', JOURNAL)) // [ 76, 9, 4, 1 ]
// console.log(phi(tableFor('pizza', JOURNAL))); // 0.06859943405700354 
// console.log(journalEvents(JOURNAL));
/* [
	'carrot',       'exercise',
	'weekend',      'bread',
	'pudding',      'brushed teeth',
	'touched tree', 'nachos',
	'cycling',      'brussel sprouts',
	'ice cream',    'computer',
	'potatoes',     'candy',
	'dentist',      'running',
	'pizza',        'work',
	'beer',         'cauliflower',
	'lasagna',      'lettuce',
	'television',   'spaghetti',
	'reading',      'peanuts'
] */

for (const event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1) {
		// console.log(`${event}: ${correlation}`)
		/*
			weekend: 0.13719886811400708
			brushed teeth: -0.3805211953235953
			candy: 0.12964074471043288
			work: -0.13719886811400708
			spaghetti: 0.242535625036333
			reading: 0.11068280537595927
			peanuts: 0.59026798116852
		*/
	}
}

for (let entry of JOURNAL) {
	if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
		entry.events.push("peanut teeth");
	}
}
// console.log(phi(tableFor("peanut teeth", JOURNAL))); // → 1

// Arrayology
let todoList = [];
function remember(task) {
	todoList.push(task);
}
function getTask() {
	return todoList.shift();
}
function rememberUrgently(task) {
	todoList.unshift(task);
}

// console.log([1, 2, 3, 2, 1].indexOf(2)); // → 1
// console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3
// console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
// console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]

// function remove(array, index) {
// 	return array.slice(0, index).concat(array.slice(index + 1));
// }
// console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]

// console.log(String(16).padStart(3, "0"))

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words); 						// → ["Secretarybirds", "specialize", "in", "stomping"]
// console.log(words.join(". ")); 	// → Secretarybirds. specialize. in. stomping

// console.log(Math.max(1,3,5,6)) // 6

// REST Parameters
function max(num, ...numbers) {
	console.log(num)
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}
// console.log(max(21, 5, 6, 10, 2, 4)); 		// -> 10

function min(...numbers) {
	let result = Infinity;
	for (let number of numbers) {
		if (number < result) result = number;
	}
	return result;
}

// console.log(min(1, 5, 6, 10,-2, 2, 4)); // -> -2

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]); // → ["will", "never", "fully", "understand"]
// console.log(...["will", ...words, "understand"]); // → will never fully understand

function randomPointOnCircle(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {
		x: radius * Math.cos(angle),
		y: radius * Math.sin(angle)
	};
}

console.log(randomPointOnCircle(2)); // → {x: 0.3667, y: 1.966}

function phiDestructuring([n00, n01, n10, n11]) {
	return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

// Optional property access
function city(object) {
	return object.address?.city;
}

console.log(city({ address: { city: "Toronto" } }));
// → Toronto

console.log(city({ name: "Vera" }));
// → undefined