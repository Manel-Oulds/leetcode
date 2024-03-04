class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(); // Dummy node to simplify handling of head
    dummy.next = head;
    let prev = dummy;
    let current = head;
    let count = 0;

    // Find the length of the list
    let length = 0;
    while (head !== null) {
        length++;
        head = head.next;
    }

    // Reverse groups of size k
    while (length >= k) {
        // Reverse the group of size k
        let next = null;
        let groupTail = current;
        for (let i = 0; i < k; i++) {
            let temp = current.next;
            current.next = next;
            next = current;
            current = temp;
        }

        // Update pointers to connect the reversed group with the rest of the list
        prev.next = next;
        groupTail.next = current;

        // Move prev to the last node of the reversed group
        prev = groupTail;
        length -= k;
    }

    return dummy.next; // Return the head of the modified list
}

// Test the function
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const k = 2;
const reversedList = reverseKGroup(head, k);

// Print the reversed list
let current = reversedList;
let output = [];
while (current !== null) {
    output.push(current.val);
    current = current.next;
}
console.log(output); // Output: [2, 1, 4, 3, 5]
