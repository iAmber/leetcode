/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
	let res = new ListNode(0)
	let carryNum = 0
	let cur = null
	while(l1 !== null || l2 !== null) {  
		let x = l1 ? l1.val : 0
		let y = l2 ? l2.val : 0
		let sum = x + y + carryNum
		let restNum = sum % 10
		carryNum = parseInt(sum / 10)		
		if (!cur) {
			cur = res.next = new ListNode(restNum)
		} else {
			cur = cur.next = new ListNode(restNum)
		}
		l1 = l1 ? l1.next : null	
		l2 = l2 ? l2.next : null
	}
	if (carryNum) {
		cur.next = new ListNode(carryNum)
	}
    return res.next
}