'use strict';

const Edge = require("./Edge");
const Vertext = require("./Vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, [])
  }

  addEdge(start, end, weight) {
    if(!this.adjacencyList.has(start) && !this.adjacencyList.has(end)) {
      console.log('We cannot have an edge without staring and ending Vertex!!')
      return;
    }

    const startVertex = this.adjacencyList.get(start);
    const edge = new Edge(end, weight);
    
    // console.log('The start ',startVertex)
    // console.log('Edge', edge)
    
    startVertex.push(edge);
  }
}

const graph = new Graph();

const one = new Vertext(1);
const two = new Vertext(2);
const three = new Vertext(3);
const four = new Vertext(4);
const five = new Vertext(5);
const six = new Vertext(6);
// const bashar = new Vertext('Waleed');
graph.addVertex(one)
graph.addVertex(two)
graph.addVertex(three)
graph.addVertex(four)
graph.addVertex(five)
graph.addVertex(six)


graph.addEdge(one, two);
graph.addEdge(one, three, 5);
graph.addEdge(two, four);
graph.addEdge(two, five);
graph.addEdge(four, three);
graph.addEdge(five, six);

// graph.addVertex(waleed)
// graph.addVertex(bashar)

// console.log(graph.adjacencyList.entries())

for(const [k, v] of graph.adjacencyList.entries()) {
  console.log('Key =>', k, 'V =>', v)
  // for(let i = 0; i < v.length; i++) {
  //   console.log(v[i])
  // }
}