class Graph {
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }
    //Create a new Vertex
    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
    //Add the connection
    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const graph = new Graph();