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

      

    return false;
}

