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
    // find method
    find(value){
        if(this.root === null) return false;
        var temp = this.root,
            found = false;
        while(temp && !found) {
            if(value < current.value){
                temp = temp.left;
            } else if(value > temp.value){
                temp = temp.right;
            } else {
                found = true;
            }
        }
        return false;
    }
    BFS(){
        var node  = this.root,
            data = [],
            queue = [];
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        return data;
    }
    // DFS PreOrder
    DFS2(){
        var data = [];
        // helper function
        function traverse(node){
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(this.root);
        return data;
    }
    // DFS In-order
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
}
