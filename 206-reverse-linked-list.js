/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  if(!head || !head.next) return head
  let prev = null, cur = head, tempNext;
  while(cur) {
    tempNext = cur.next // 用于临时存储 cur 后继节点
    cur.next = prev // 反转 cur 的后继指针
    prev = cur // 变更prev、cur 待反转节点指向下一个节点 
    cur = tempNext
  }
  return prev
};

