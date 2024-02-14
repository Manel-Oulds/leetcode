class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if list has 0 or 1 node
    }

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

// Test the function
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3; // Cycle

console.log(hasCycle(head)); // Output: true
