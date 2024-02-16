class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    if (!node) return null;

    const visited = new Map();

    const dfs = (current) => {
        if (visited.has(current.val)) return visited.get(current.val);

        const clonedNode = new Node(current.val);
        visited.set(current.val, clonedNode);

        for (let neighbor of current.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }

        return clonedNode;
    };

    return dfs(node);
}

// Test the function
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clonedGraph = cloneGraph(node1);
console.log(clonedGraph);
