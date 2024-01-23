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
          // We are done, build up the path to return
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          break;
        }
    }


      }