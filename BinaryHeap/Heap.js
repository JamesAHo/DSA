// Max binary heap, parent nodes are always larger than child nodes. In a Min Heap parent nodes always smaller than child nodes.
class MaxBinaryHeap{
    constructor(){
        this.value = [];
    }
    insert(el){
        this.value.push(el);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.value.length - 1;
        const el = this.value[idx];
        while(idx > 0){
            // parent formula (i-1) / 2
            let parentIdx = Math.floor((idx -1) / 2);
            let parent = this.value[parentIdx];
            if(el <= parent) break;
                this.value[parentIdx] = el;
                this.value[idx] = parent;
                idx = parentIdx;
            
        }
    }
    // extractMax from BinaryHeap
    // Swap the first value in the value property with the last one
    // Pop from the values property, so you can return the value at the end
    // Have the new root sink down to the correct spot
    // parent idx starts at 0
    // find the index of the left child 2*idx + 1
    // find the index of the right child 2* idx + 2
    // If the left or right child is greater than el => swap
    // the child index you swapped to now becomes the new parent index
    // Keep looping and swapping until netiher child is larger than el
    // return the old root
    extractMax(){
        const max = this.value[0];
        const end = this.value.pop();
        if(this.value.length > 0){
            this.value[0] = end;
            this.sinkingdown();
        }
        return max;
    }
    sinkingdown(){
        let idx = 0;
        const  length = this.value.length;
        const element = this.value[0];
        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild,rightChild;
            // let swap null
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.value[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.value[rightChildIdx];
                if(swap === null && rightChild > element || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.value[idx] = this.value[swap];
            this.value[swap] = element;
            idx = swap;
        }
    }
}