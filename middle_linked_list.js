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