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

}