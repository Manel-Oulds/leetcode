function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        if (index === word.length) return true;
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;

        const temp = board[row][col];
        board[row][col] = ''; // Mark the cell as visited

        // Explore adjacent cells
        if (dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1)) {
            return true;
        }

        board[row][col] = temp; // Backtrack
        return false;
    }

  

    return false; // Word not found
}

