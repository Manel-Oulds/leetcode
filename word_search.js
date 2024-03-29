function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        if (index === word.length) return true;
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;

        const temp = board[row][col];
        board[row][col] = ''; // Mark the cell as visited

       
    }

  

    return false; // Word not found
}

