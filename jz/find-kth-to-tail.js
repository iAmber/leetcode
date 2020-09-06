/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  if (head == null || k <= 0) return null
  let slow = head, fast = head;
  for (let i = 1; i < k; i++) {
    if(fast.next) {
      fast = fast.next
    } else {
      return null
    }
  }
  while(fast.next) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

// another
function FindKthToTail(head, k) {
  if (head == null || k <= 0) return null
  let slow = head, fast = head;
  let i; // head distance
  for(i = 0; fast !== null; i++) {
    if(i >= k) {
      slow = slow.next // waiting fast move k distance
    }
    fast = fast.next
  }
  return i < k ? null : slow
}