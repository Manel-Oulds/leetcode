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

    // Iterate through each cell in the board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true; // Start DFS from each cell
        }
    }

    return false; // Word not found
}

// Test the function
const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = "ABCCED";
console.log(exist(board, word)); // Output: true
