class Node {
    constructor(val, prev = null, next = null, child = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

function flatten(head) {
    if (!head) return null;

    let stack = [];
    let current = head;

    while (current !== null || stack.length > 0) {
        if (current.child !== null) {
            if (current.next !== null) {
                stack.push(current.next);
            }
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        } else if (current.next === null && stack.length > 0) {
            current.next = stack.pop();
            if (current.next !== null) {
                current.next.prev = current;
            }
        }

        current = current.next;
    }

    return head;
}

