// Types of graph
// Adjacency matrix
// Adjacency List
class Graph{
    constructor(graph){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex] = []) this.adjacencyList[vertex] = [];
    }
    addEdges(v1,v2){
        this.adjacencyList[v1].push(v1);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}