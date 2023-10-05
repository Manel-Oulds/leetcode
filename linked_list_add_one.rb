# 741: 1 -> 4 -> 7

# Input: 1 -> 4 -> 7
# Output: 2 -> 4 -> 7

# linked list node attributrs: .val, .next

# We have a pointer to the first ele # 1 
# Changing the value(data) of the first ele to the new value
# case 1: if val < 9 Add 1 to the value 
# case 2 : head.val+1 and iterate through the linked list Add 1 to the last node val
#returning the linked list


# Input: 9 -> 1 -> 1
# Output: 0 -> 2 -> 1

# Input: 9 -> 9 -> 1

# Input: 9 -> 9
# Output: 0 -> 0 -> 1
def change_head(head)
    current = head  # 9 -> 9   
   
    if current.val < 9    # 9 ==9 
        current.val = head.val + 1
    else
        while current.val == 9      #true current == 9              #true current == 9  
            current.val = 0    # current = 0 # 0 -> 0       
            current = current.next      # current = nil              # current = 1
        end
        
    end 
    head      # 0 -> 0 -> 1
    
end