// Define ListNode once
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Helper: Convert an array into a linked list
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper: Convert a linked list back into an array
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Loop until both lists are empty AND carry is 0
  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = (l1 !== null) ? l1.val : 0;
    const val2 = (l2 !== null) ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  
  return dummyHead.next; // The sum list starts here
}

// ----------------------------------------------------
// Example test:
// Convert [2,4,3] and [5,6,4] to linked lists
const list1 = arrayToLinkedList([2,4,3]);
const list2 = arrayToLinkedList([5,6,4]);

// Add them
const resultList = addTwoNumbers(list1, list2);

// Convert result back to array
const resultArray = linkedListToArray(resultList);

// Log the final array to see the sum digits
console.log(resultArray); // Should print [7, 0, 8]
