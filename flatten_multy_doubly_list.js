class Node {
    constructor(val, prev, next, child) {
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
            current.next.prev = current;
        }
        current = current.next;
    }

    return head;
}

// Test the function
// Create the multilevel doubly linked list
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = new Node(5);
head.next.next.next.next.prev = head.next.next.next;

head.child = new Node(6);
head.child.next = new Node(7);
head.child.next.prev = head.child;
head.child.next.next = new Node(8);
head.child.next.next.prev = head.child.next;

const flattenedList = flatten(head);

// Print the flattened list
let output = [];
while (flattenedList !== null) {
    output.push(flattenedList.val);
    flattenedList = flattenedList.next;
}
console.log(output); // Output: [1, 2, 3, 6, 7, 8, 4, 5]
