class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            this.insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            this.insertNode(node.right, newNode);
          }
        }
    }

    findLowestCommonAncestor(node1, node2) {
        return this.findLowestCommonAncestorRecursive(this.root, node1, node2);
    }

    findLowestCommonAncestorRecursive(node, node1, node2) {
        if (!node) return null;
    
        if (node.data === node1 || node.data === node2) {
          return node;
        }
    
        const leftLCA = this.findLowestCommonAncestorRecursive(node.left, node1, node2);
        const rightLCA = this.findLowestCommonAncestorRecursive(node.right, node1, node2);
    
        if (leftLCA && rightLCA) {
          return node;
        }
    
        return leftLCA ? leftLCA : rightLCA;
      }

}
  
