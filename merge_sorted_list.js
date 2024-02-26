class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(); // Dummy node to simplify handling of head
    let current = dummy; // Pointer to the current node of the merged list

    // Compare nodes from both lists and append the smaller node to the merged list
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes of the non-empty list to the merged list
    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next; // Return the head of the merged list
}

// Test the function
// Create the first sorted linked list: 1 -> 2 -> 4
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

// Create the second sorted linked list: 1 -> 3 -> 4
const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const mergedList = mergeTwoLists(l1, l2);

// Print the merged list
let current = mergedList;
let output = [];
while (current !== null) {
    output.push(current.val);
    current = current.next;
}
console.log(output); // Output: [1, 1, 2, 3, 4, 4]
