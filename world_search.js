function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (i, j, index) => {
        if (index === word.length) {
            return true; // Word found
        }

        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[index]) {
            return false; // Out of bounds or mismatch
        }

        const temp = board[i][j]; // Save current character
        board[i][j] = '#'; // Mark current cell as visited

        // Explore neighboring cells recursively
        const found = dfs(i + 1, j, index + 1) ||
                     dfs(i - 1, j, index + 1) ||
                     dfs(i, j + 1, index + 1) ||
                     dfs(i, j - 1, index + 1);

        board[i][j] = temp; // Restore current character
        return found;
    };

    // Start DFS search from each cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true; // Word found
            }
        }
    }

    return false;
}

