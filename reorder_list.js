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

   
}

