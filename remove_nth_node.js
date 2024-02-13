class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    // Advance the first pointer so that the gap between first and second is n+1 nodes apart
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
}


