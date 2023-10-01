def two_sum(nums, target)
    num_indices = {}
  
    nums.each_with_index do |num, index|
      complement = target - num
      if num_indices.key?(complement)
        return [num_indices[complement], index]
      end
      num_indices[num] = index
    end
    raise "No two elements add up to the target."
  
      
  end


# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]

p two_sum([2,7,11,15],9)

# Input: nums = [3,2,4], target = 6
# Output: [1,2]

p two_sum([3,2,4],6)


# Input: nums = [3,3], target = 6
# Output: [0,1]

p two_sum([3,3],6)