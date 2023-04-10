// shortest path between nodes ion a weighted graph
// Write a weighted graph
// this is a regular priority queue
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    // add priority in parameter
    enqueue(val, priority){
       this.values.push({val, priority});
       this.sort();
    }
    
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
    
}
class WeightedGraph{
    constructor(){
        // adjacency List
        this.adjacencyList = {};
    }
    addVertext(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    // add edge
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    //
    Dijkstra(start, finish){
        // call nodes as new PriorityQueue
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];

        // build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
        // visit remaining nodes
        // time complexity is O2
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // find neighbors node
                    console.log(neighbor)
                    // calculate
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        let nextNeighbor = nextNode.node
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating preevious how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidates);
                    }
                }
            }
        }
        // return result
        return path.concat(smallested).reverse();
    }
}
