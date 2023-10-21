/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.


Input: head = 1 -> 2 -> 3 -> 4 -> 5, n = 2
Output: 1 -> 2 -> 3 -> 5

1. iterate through the list 
2. Getting the length and remove the element in length - n
3. list(length - n - 1).next = list(length - n + 1)
4. return head
*/

function removeFromEnd(head, n) {  // head = 1 -> 2 -> 3 -> 4 -> 5, n = 5
    const p = head; // p: pointer ; 
    const count = 0;
    // length of the linked list
    while (p !== null){
        count++; // count = 5; 
        p = p.next;// p-> null;
    }
       // The element is in the position count - 5 = 0
       const first = head;   // first -> 1
       const second = head; // second -> 1
       const c = 0;
       
       if(count === n){
           head = first.next;
           first.next = null;
       }
}