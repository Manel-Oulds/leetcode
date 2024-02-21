function isBipartite(graph) {
    const colors = new Map(); // Map to store colors assigned to nodes

    const dfs = (node, color) => {
        if (colors.has(node)) {
            return colors.get(node) === color; // Check if current color matches previously assigned color
        }
        colors.set(node, color); // Assign color to the current node

        for (let neighbor of graph[node]) {
            if (!dfs(neighbor, color ^ 1)) { // Color neighbor with opposite color
                return false; // If conflict is detected, graph is not bipartite
            }
        }
        return true;
    };

     // Perform DFS on each uncolored node
     for (let i = 0; i < graph.length; i++) {
        if (!colors.has(i) && !dfs(i, 0)) { // Start DFS with color 0
            return false;
        }
    }
    return true;


}
const graph = [[1,3],[0,2],[1,3],[0,2]];
console.log(isBipartite(graph)); // Output: true