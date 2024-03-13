function rotate(matrix) {
    const n = matrix.length;

    // Transpose the matrix (swap rows and columns)
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

   
}

