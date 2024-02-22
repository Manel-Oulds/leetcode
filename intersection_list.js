class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}