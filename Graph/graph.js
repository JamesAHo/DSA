// Types of graph
// Adjacency matrix
// Adjacency List
class Graph{
    constructor(graph){
        this.adjacency = {};
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex] = []) this.adjacencyList[vertex] = [];
    }
    addEdges(v1,v2){
        this.adjacencyList[v1].push(v1);
        this.adjacencyList[v2].push(v1);
    }
}