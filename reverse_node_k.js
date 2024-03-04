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

  

    return dummy.next; // Return the head of the modified list
}

