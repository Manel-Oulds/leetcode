class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(value, priority) {
      this.values.push({ value, priority });
      this.sort();
    }
  
    dequeue() {
      return this.values.shift();
    }
  
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }
  
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  
    dijkstra(start, finish) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = []; 
      let smallest;
  
      // Build up initial state
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }
  
    
      while (nodes.values.length) {
        smallest = nodes.dequeue().value;
        if (smallest === finish) {
          
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          break;
        }
  
        if (distances[smallest] !== Infinity) {
          for (let neighbor in this.adjacencyList[smallest]) {
            // Find neighboring node
            let nextNode = this.adjacencyList[smallest][neighbor];
            // Calculate new distance to neighboring node
            let potential = distances[smallest] + nextNode.weight;
            let nextNeighbor = nextNode.node;
  
            if (potential < distances[nextNeighbor]) {
              // Updating new smallest distance to neighbor
              distances[nextNeighbor] = potential;
              // Updating previous - How we got to neighbor
              previous[nextNeighbor] = smallest;
              // Enqueue in priority queue with new priority
              nodes.enqueue(nextNeighbor, potential);
            }
          }
        }
      }
  
      return path.concat(smallest).reverse();
    }
  }


  //Testing
  const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);

console.log(graph.dijkstra("A", "E"));