// Object Oriented Program
// Singly Linkedlist
// Each element is a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}
class singlyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
    }
}
