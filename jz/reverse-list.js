/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function ReverseList(pHead) {
  if(!pHead) return null
  if(!pHead.next) return pHead
  let prev = null, cur = pHead;
  while (cur) {
    const temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}