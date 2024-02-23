class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}

// Test the function
// Construct the linked lists
// List A:          4 -> 1 -> 8 -> 4 -> 5
// List B:     5 -> 6 -> 1 -> 8 -> 4 -> 5
const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = new ListNode(8);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

const listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = listA.next.next; // Pointing to the intersection node

const intersection = getIntersectionNode(listA, listB);
if (intersection) {
    console.log("Intersection node with value:", intersection.val);
} else {
    console.log("No intersection");
}
