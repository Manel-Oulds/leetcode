class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      const nextNode = current.next;  // Store the next node
      current.next = prev;            // Reverse the current node
      prev = current;                 // Move prev to the current node
      current = nextNode;             // Move current to the next node
    }
  
    return prev;  
  }

  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }


const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Original Linked List:");
printLinkedList(head);