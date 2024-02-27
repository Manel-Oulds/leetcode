class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    let current = head;

    // Traverse the list
    while (current !== null && current.next !== null) {
        // If current node's value is equal to next node's value, remove the next node
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head; // Return the head of the modified list
}

// Test the function
// Create the sorted linked list: 1 -> 1 -> 2
const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);

const newList = deleteDuplicates(head);

// Print the modified list
let current = newList;
let output = [];
while (current !== null) {
    output.push(current.val);
    current = current.next;
}
console.log(output); // Output: [1, 2]
