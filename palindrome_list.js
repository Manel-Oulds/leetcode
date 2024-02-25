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

  

   


}
