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
    // pop method -- removing a node from the end of the Linked List
    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let newtail = temp;
        while(temp.next) {
            newtail = temp;
            temp = temp.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    shifting() {
        if(!this.head) return undefined;
        temp = this.head;
        this.head = temp.next;
        this.length--;
        // No node situation
        if(this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    unshifting(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        // can add counter and do while loop while(counter !== index)
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
}