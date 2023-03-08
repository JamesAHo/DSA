// Types of graph
// Adjacency matrix
// Adjacency List
class Graph{
    constructor(){
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
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    // DFS recursive
    DFS(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start)
    }
    // DFS iterative
    DFSiterate(start){
        const stack = [];
        const result = [];
        const visited = [];
        let currentVertex;
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                visited[neighbor] = true;
                stack.push(neighbor);
                }
            });
        }
        return result;
    }
    // BFS

}

// DFS in Graph
