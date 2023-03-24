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
        // make new Node
        const newNode = new Node(value);
        // if no list is empty then head = newNode and tail = newNode
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        // otherwise tail.next = newNode 
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment the list length
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
        if(index === 0) return this.unshift(value);
        const newNode = new Node(value);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // if the index is less than 0 or greather than the length, return undefined
    // If the index is the same as the length-1, pop
    // If the index is 0, shift
    // Otherwise, using the get method, access the node at index-1
    // Set the next property on that node to be the next of the next node
    // decreement the length
    // return the value of the node removed
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length -1) return this.pop();
        if(index === 0) return this.shifting();
        let previousNode = this.get(index-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    // Swap the head and the tail
    // Create a variable called next
    // create a variable called previous
    // create a variable called node and initialized it to the head property
    // Loop throught the list
    // Set next to be the next property on whatever node is
    // Set the next proptery on the node to be whatever prev is
    // set the prev to be the value of the node variable
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev= temp;
            temp = next;
        }

        return this;   
    }
    isPalindrome(head){
        let fast = this.head;
        let slow = this.head;
        // is to find midpoint 
        while(fast&& fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        fast = head;
        slow = reverse(slow)
        while(slow) {
            if(fast.val !== slow.val) return false;
            slow = slow.next;
            fast = fast.next;
        }
    }
    deleteDuplicates() {
        const head = new NodeList(value) 
        let current = head;
        while(current !== null && current.next !== null){
            if(current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return head;
    }
}
// BigO notation
// Insertion O(1)
// Removal O(1) or O(N)
// Searching O(N)
// Access O(N)
