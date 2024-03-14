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

    // Step 2: Use the first row and first column to mark zero elements in the matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the first element of the row as zero
                matrix[0][j] = 0; // Mark the first element of the column as zero
            }
        }
    }

    // Step 3: Set zeros based on the marks in the first row and first column
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 4: Set zeros for the first row if necessary
    if (matrix[0][0] === 0) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 5: Set zeros for the first column if necessary
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}

