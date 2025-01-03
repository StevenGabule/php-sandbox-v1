// O(1) example
/**
* Raise number to the power.
*
* Example:
* number = 3
* power = 2
* output = 3^2 = 9
*
* @param {number} number
* @param {number} power
* @return {number}
*/
function fastPower(number, power) {
	return number ** power;
}

// console.log(fastPower(3,2))

// O(n) example
/**
 * Raise number to the power.
 *
 * Example:
 * number = 3
 * power = 2
 * output = 3^2 = 9
 *
 * @param {number} number
 * @param {number} power
 * @return {number}
 */
function iterative(number, power) {
	let result = 1;
	for (let i = 0; i < power; i += 1) {
		result *= number;
	}
	return result;
}

// console.log(iterative(3, 2))

/**
 * Calculate factorial
 * 
 * Example:
 * number = 5
 * output = 120
 * 
 * @param {number} number
 * @return {number}
 */
function factorial(number) {
	if (number === 0) return 1;
	return factorial(number - 1) * number;
}
// console.log(factorial(5))

function loopFactorial(number) {
	let currentNumber = number - 1;
	let currentTotal = number;
	for (let i = number; i > 1; i--) {
		currentTotal = (currentTotal * currentNumber);
		currentNumber = currentNumber - 1;
	}
	return currentTotal;
}
// console.log(loopFactorial(5))

/**
 * Get all possible pairs out of provided letters.
 * 
 * Example:
 * letter = ['a', 'b']
 * output = ["aa", "ab", "ba", "bb"]
 * @param {letters[]} letters
 * @return {string[]}
 */
function pairs(letters) {
	const result = []
	for (const i of letters) {
		for (const j of letters) {
			result.push(`${i}${j}`)
		}
	}
	return result;
}
// console.log(pairs(['a', 'b']))

/**
 * Multiply all values of the array by certain value in place
 * 
 * Example:
 * array = [1,2,3]
 * multiplier = 2
 * output = [2,4,6]
 * 
 * @param {number[]} arr 
 * @param {number} multiplier 
 * @returns {number[]}
 */
function multiplyArrayInPlace(arr, multiplier) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] *= multiplier;
	}
	return arr;
}
// console.log(multiplyArrayInPlace([1,2,3], 2));

function multiplyArray(array, multiplier) {
	const multipliedArray = [...array];
	for (let i = 0; i < multipliedArray.length; i += 1) {
		multipliedArray[i] *= multiplier;
	}
	return multipliedArray;
}
console.log(multiplyArray([1, 2, 3], 2));
