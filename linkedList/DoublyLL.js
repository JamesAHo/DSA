// In a doubly linked list, each node has a reference to the previous node as well as the next node in the list.
// This allows for efficient insertion and deletion of nodes from the list, as you can easily update the links between nodes to reflect the changes. In a doubly linked list, the first node typically has a null previous reference, and the last node typically has a null next reference.
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push method
    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;    
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // popping method
    pop(){
        if(!this.head) return undefined;
        const temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
        // 27 <-- 89
    //    --> null
    }
    // shift method
    shift(){
        if(this.length === 0) return undefined;
        const temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    // unshift method
    unshift(value){
        const newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next= this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        // 1 2
        // newNode 1 2 
    }
    // get method
    get(index){
        // edge case
        if(index < 0 || index >= this.length) return null;
        let current;
        if(index <= this.length / 2){
            current = this.head;
            for(let i = 0; i < this.length; i++){
                current = current.next;
            }
        } else {
            current = this.tail;
            for(let i = this.length -1; i > index; i--){
                current = current.prev;
            }
        }
        return current;
    }
    // set method
    set(index,val){
        const currentNode = this.get(index);
        if(currentNode !== null){
            currentNode.val = val;
            return true;
        }
        return false;
    }
    // insert method
    insert(index,val){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        const newNode = new Node(val);
        const beforeNode = this.get(index -1);
        const afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    // A B C NewNode D E F
    // remove method
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        const removedNode =- this.get(index)
        // A B C removedNode D E F
        // A B C <-- removedNode --> D E F
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    reverse(head){
        let current = this.head;
        let temp = null;
        while(current !== null){
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev
        }
        if(temp !== null){
            head = temp.prev;
        }
    }
};