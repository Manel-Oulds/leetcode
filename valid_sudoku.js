function isValidSudoku(board) {
    const seen = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const currentVal = board[i][j];
            if (currentVal !== '.') {
                const rowStr = `row ${i} ${currentVal}`;
                const colStr = `col ${j} ${currentVal}`;
                const boxStr = `box ${Math.floor(i / 3)}-${Math.floor(j / 3)} ${currentVal}`;

                if (seen.has(rowStr) || seen.has(colStr) || seen.has(boxStr)) {
                    return false;
                }
                seen.add(rowStr);
                seen.add(colStr);
                seen.add(boxStr);
            }
        }
    }

    return true;
}

// Test the function
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  
  console.log(isValidSudoku(board)); // Output: true


