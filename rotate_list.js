class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rotateRight(head, k) {
    if (!head || k === 0) return head;

    let length = 1;
    let tail = head;

    // Calculate the length of the list and find the tail node
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    // Adjust k to be within the length of the list
    k = k % length;

    // If k is zero, no rotation is needed
    if (k === 0) return head;

    // Find the new head and new tail after rotation
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;

    // Update pointers to perform rotation
    newTail.next = null;
    tail.next = head;

    return newHead;
}

// Test the function
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const k = 2;
const rotatedList = rotateRight(head, k);

// Print the rotated list
let current = rotatedList;
let output = [];
while (current !== null) {
    output.push(current.val);
    current = current.next;
}
console.log(output); // Output: [4, 5, 1, 2, 3]
