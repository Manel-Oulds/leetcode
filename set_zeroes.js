function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstColZero = false;

    // Step 1: Scan the first row and first column to check if they contain zeros
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

  
}

