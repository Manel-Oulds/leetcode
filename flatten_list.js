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

// Test the function
// Create the multilevel doubly linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;
node5.next = node6;
node6.prev = node5;
node3.child = node7;
node7.next = node8;
node8.prev = node7;
node8.next = node9;
node9.prev = node8;
node9.next = node10;
node10.prev = node9;
node8.child = node11;
node11.next = node12;
node12.prev = node11;

const flattenedList = flatten(node1);

// Print the flattened list
let current = flattenedList;
let output = [];
while (current !== null) {
    output.push(current.val);
    current = current.next;
}
console.log(output.join(" <-> "));
