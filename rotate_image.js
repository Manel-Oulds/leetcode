function rotate(matrix) {
    const n = matrix.length;

    // Transpose the matrix (swap rows and columns)
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row to rotate the matrix 90 degrees clockwise
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Test the function
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(matrix);
console.log(matrix);
