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
  }