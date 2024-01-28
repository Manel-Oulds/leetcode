# Write a Python function called inorder_traversal that takes the root of a 
# binary tree as input and returns a list containing the inorder traversal 
# of the tree.

class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def inorder_traversal(root):
    result = []  # To store the inorder traversal result
    inorder_helper(root, result)
    return result

