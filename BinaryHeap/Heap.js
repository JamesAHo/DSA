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
            let parentIdx = Math.floor((idx -1) / 2);
            let parent = this.value[parentIdx];
            if(el <= parent) break;
                this.value[parentIdx] = el;
                this.value[idx] = parent;
                idx = parentIdx;
            
        }
    }
}