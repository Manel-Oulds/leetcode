class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    

    let slow = head;
    let fast = head.next;

    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false; // Reached end of list without cycle
        }
        slow = slow.next; // Move slow pointer by one step
        fast = fast.next.next; // Move fast pointer by two steps
    }

    return true; // If fast and slow meet, there is a cycle
}


