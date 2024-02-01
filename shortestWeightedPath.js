class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(element, priority) {
        this.heap.push({ element, priority });
        this.heapifyUp();
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min.element;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallestChildIndex].priority) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallestChildIndex].priority) {
                smallestChildIndex = rightChildIndex;
            }

            if (currentIndex !== smallestChildIndex) {
                [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}

function shortestPath(graph, source, destination) {
    const n = graph.length;
    const distances = new Array(n).fill(Number.POSITIVE_INFINITY);
    const visited = new Array(n).fill(false);
    const previous = new Array(n).fill(null);
    const priorityQueue = new PriorityQueue();

    distances[source] = 0;
    priorityQueue.enqueue(source, 0);

    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue();

        if (currentNode === destination) {
            // Reconstruct the path
            const path = [];
            let current = destination;
            while (current !== null) {
                path.unshift(current);
                current = previous[current];
            }
            return path;
        }

        visited[currentNode] = true;

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (!visited[neighbor] && graph[currentNode][neighbor] !== 0) {
                const newDistance = distances[currentNode] + graph[currentNode][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = currentNode;
                    priorityQueue.enqueue(neighbor, newDistance);
                }
            }
        }
    }

    // No path found
    return [];
}

// Example usage:
const graph = [
    [0, 4, 2, 0, 0],
    [0, 0, 5, 10, 0],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]
];

const source = 0;
const destination = 4;

const result = shortestPath(graph, source, destination);
console.log(result);  // Output: [0, 2, 4]
