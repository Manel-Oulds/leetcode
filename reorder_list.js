class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head) {
    if (!head || !head.next) return;

    // Find the middle of the list using fast and slow pointers
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    let current = slow.next;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    slow.next = null; // Break the original list into two halves

    // Merge the two halves of the list
    let first = head;
    let second = prev;
    while (second !== null) {
        let nextTemp1 = first.next;
        let nextTemp2 = second.next;
        first.next = second;
        second.next = nextTemp1;
        first = nextTemp1;
        second = nextTemp2;
    }
}

// Test the function
// Create the linked list: 1 -> 2 -> 3 -> 4
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

reorderList(head);

// Print the reordered list
let current = head;
let output = [];
while (current !== null) {
    output.push(current.val);
    current = current.next;
}
console.log(output); // Output: [1, 4, 2, 3]
