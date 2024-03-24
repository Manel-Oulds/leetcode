function maximalSquare(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSide = 0;
    const dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));


}


