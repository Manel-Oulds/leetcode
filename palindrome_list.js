class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    // Helper function to reverse a linked list
    const reverseList = (node) => {
        let prev = null;
        let current = node;

        while (current !== null) {
            let nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }

        return prev;
    };

    let slow = head;
    let fast = head;

    // Use fast and slow pointers to find the middle of the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let reversedSecondHalf = reverseList(slow);

    // Compare the first half with the reversed second half
    while (reversedSecondHalf !== null) {
        if (head.val !== reversedSecondHalf.val) {
            return false; // Not a palindrome
        }
        head = head.next;
        reversedSecondHalf = reversedSecondHalf.next;
    }

    return true; // Palindrome
}

// Test the function
// Create the linked list: 1 -> 2 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
