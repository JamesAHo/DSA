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
        }
        this.length--;
        // 27 <-- 89
    //    --> null
    }
    
}