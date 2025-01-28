// https://leetcode.com/problems/add-two-numbers/
const l1 = [2, 4, 3], l2 = [5, 6, 4];
const num1 = l1.join('')
const num2 = l2.join('')
const total = String(parseInt(num1) + parseInt(num2)).split('').reverse('')
console.log({ total }) // { total: [ '7', '0', '8' ] }

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

/**
* @param {ListNode} linkedListOne
* @param {ListNode} linkedListTwo
* @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {
	const dummyHead = new ListNode(0);
	let current = dummyHead;
	let carry = 0;

	while (l1 !== null || l2 !== null || carry !== 0) {
			let dummyHead = new ListNode(0);
			let current = dummyHead;
			let carry = 0;

			while (l1 !== null || l2 !== null || carry !== 0) {
					let val1 = (l1 !== null) ? l1.val : 0;
					let val2 = (l2 !== null) ? l2.val : 0;
					let sum = val1 + val2 + carry;

					carry = Math.floor(sum / 10);
					current.next = new ListNode(sum % 10);
					current = current.next;

					if (l1 !== null) l1 = l1.next;
					if (l2 !== null) l2 = l2.next;
			}

			return dummyHead.next;
	}

	return dummyHead.next;

}

console.log(addTwoNumbers([2,4,3], [5,6,4]))