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


