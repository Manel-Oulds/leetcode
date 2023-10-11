#Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
  # needs correction if matrix[0] is a number
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

    zero_rows.each do |row|
        for j in 0...cols
          matrix[row][j] = 0
        end
    end

    zero_cols.each do |col|
        for i in 0...rows
          matrix[i][col] = 0
        end
      end

end


p set_zeroes([1,2,3])