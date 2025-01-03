class LinkedListNode {
	value;
	next;
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	toString(callback) {
		return callback ? callback(this.value) : `${this.value}`;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	prepend(value) {
		// make new node to be a head
		const newNode = new LinkedListNode(value, this.head);
		this.head = newNode;
		if (!this.tail) {
			this.tail = newNode;
		}
		return this;
	}

	append(value) {
		const newNode = new LinkedListNode(value)
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		const currentTail = this.tail;
		currentTail.next = newNode;
		this.tail = newNode;

		return this;
	}

	delete(value) {
		if (!this.head) return null;

		let deletedNode = null;

		// If the head must be deleted then make next node that is different from the head to be a new head.
		while (this.head && this.head.value === value) {
			deletedNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head;
		if (currentNode !== null) {
			while (currentNode.next) {
				if (currentNode.next.value === value) {

				}
			}
		}
	}

	deleteTail() {
		const deletedTail = this.tail;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;

			return deletedTail;
		}
		// If there are many nodes in linked list
		// Rewind to the last node and delete "next" link for the node before the last one
		let currentNode = this.head;
		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null
			} else {
				currentNode = currentNode.next;
			}
		}

		this.tail = currentNode;
		return deletedTail;
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}

		const deletedHead = this.head;

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedHead;
	}

	find({ value = undefined, callback = undefined }) {
		if(!this.head) return null;
		while(currentNode) {
			if(callback && callback(currentNode.value)) {
				return currentNode;
			}
			if (value !== undefined && currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	toArray() {
		const nodes = []
		let currentNode = this.head;
		while(currentNode) {
			nodes.push(currentNode)
			currentNode = currentNode.next;
		}

		return nodes;
	}

	toString(callback) {
		return this.toArray().map(node => node.toString(callback)).toString();
	}
}

