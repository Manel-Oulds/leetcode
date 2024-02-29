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


