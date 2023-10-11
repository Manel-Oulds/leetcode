#Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
    rows, cols = matrix.length, matrix[0].length
    zero_rows, zero_cols = [], []
  
    for i in 0...rows
      for j in 0...cols
        if matrix[i][j] == 0
          zero_rows << i
          zero_cols << j
        end
      end
    end
end