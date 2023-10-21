/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.


Input: head = 1 -> 2 -> 3 -> 4 -> 5, n = 2
Output: 1 -> 2 -> 3 -> 5

1. iterate through the list 
2. Getting the length and remove the element in length - n
3. list(length - n - 1).next = list(length - n + 1)
4. return head
*/

