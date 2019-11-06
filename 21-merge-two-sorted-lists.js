/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  if(l1===null)return l2;
  if(l2===null)return l1;
  
  if(l1.val<=l2.val){
      l1.next=mergeTwoLists(l1.next,l2);
      return l1;
  }else{
      l2.next=mergeTwoLists(l1,l2.next);
      return l2;
  }
};

function produceListNodeByArr(arr) {
  return arr.reduceRight((res, item) => {
    if (res.val) {
      const temp = new ListNode(item) 
      temp.next = res
      return temp
    } else {
      return new ListNode(item)
    }
  }, {})
}

const arr1 = [1,2,3,6]
const arr2 = [1,3,4]
const l1 = produceListNodeByArr(arr1)
const l2 = produceListNodeByArr(arr2)

console.log('exec', mergeTwoLists(l1, l2))
