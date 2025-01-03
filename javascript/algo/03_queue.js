class Queue {
	constructor() {
		this.linkedList = new LinkedList()
	}

	enqueue(value) {
		this.linkedList.append(value)
	}

	dequeue() {
		const removedHead = this.linkedList.deleteHead()
		return removedHead ? removedHead.value : null;
	}

	peek() {
		if(!this.linkedList.head) {
			return null;
		}
		return this.linkedList.head.value;
	}

	isEmpty() {
		return !this.linkedList.head;
	}

	toString(callback) {
		return this.linkedList.toString(callback);
	}
}

const messageQueue = new Queue()

// Queue now is empty and there is no message to process
messageQueue.isEmpty(); // true
messageQueue.toString() // '

messageQueue.enqueue('message_1');
messageQueue.isEmpty(); // false
messageQueue.toString() // 'message_1'
messageQueue.peek();// 'message_1'

messageQueue.enqueue('message_2');
messageQueue.isEmpty(); // false
messageQueue.toString() // 'message_2'
messageQueue.peek();// 'message_2'

// processing the messages
messageQueue.dequeue() // m1
messageQueue.dequeue() // m2

messageQueue.isEmpty(); // true

