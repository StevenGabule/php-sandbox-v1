function ListNode(val, next) {
	this.val = (val !== undefined) ? val : undefined;
	this.next = (next !== undefined) ? next : null;
}

function concertArrayToLinkedList(arr) {
	const head = new ListNode(arr[0]);
	let current = head;
	for(let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}

	return head;
}

function addToNumber(l1, l2) {
	const dummyHead = new ListNode(0);
	let current = dummyHead;
	let carry = 0;

	while(l1 !== null || l2 !== null || carry !== 0) {
		const val1 = (l1 !== null) ? l1.val : 0;
		const val2 = (l2 !== null) ? l2.val : 0;
		const sum = val1 + val2 + carry;

		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;

		if(l1 !== null) l1 = l1.next;
		if(l2 !== null) l2 = l2.next;
	}
	return dummyHead.next;
}

function convertLinkedListToArray(head) {
	const arr = [];
	let current = head;
	while (current !== null) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
} 

// inputs: L1 = [2,4,3], L2 = [5,6,4]
// Output: [8,0,7]
// convert the array to linked List
const l1 = concertArrayToLinkedList([2,4,3]);
const l2 = concertArrayToLinkedList([5,6,4]);

// do the process and logic that calculate the inputs
const resultLinkedList = addToNumber(l1, l2);

// convert the linked to array
const arrOutput = convertLinkedListToArray(resultLinkedList);

console.log(arrOutput);
