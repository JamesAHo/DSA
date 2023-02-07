// A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    // insert Method
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var temp = this.root;
            while(true){
                if(value < temp.value) {
                    if(temp.left === null){
                        temp.left = newNode;
                        return this;
                    } else {
                        temp = temp.left;
                    }
                } else if(value > temp.value){
                    if(temp.right === null){
                        temp.right = newNode;
                        return this;
                    } else {
                        temp = temp.right;
                    }
                }
            }
        }
    }
}
