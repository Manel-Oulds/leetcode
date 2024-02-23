class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head) {
    let slow = head;
    let fast = head;

    // Use fast and slow pointers to find the middle node
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow pointer one step forward
        fast = fast.next.next; // Move fast pointer two steps forward
    }

    return slow; // Return the middle node
}

// Test the function
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middle = middleNode(head);
console.log(middle.val); // Output: 3