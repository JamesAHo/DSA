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
    // This function should accept a value and an index
    // Use get function to find the specific node
    // If the node is not found return false
    // if the node is found, set the value of that node to be the value passed to the fuction and return true
    set(index,value) {
        nodeIsFound = this.get(index);
        if(nodeIsFound){
            nodeIsFound.value = value;
            return true;
        }
        return false;
    }
    // If the index is less than zero or greater than the length return false
    // If the index is the same as the length, push a new node to the end of the list.
    // if the index is 0, unshift, a new node to the start of the list
    // Otherwise, using the get method, access the node at the index -1
    // Set the next property on that node to be the new node
    insert(index,value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshifting(value);
        const newNode = new Node(value);
        prev = this.get(index - 1);
        temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    
}
