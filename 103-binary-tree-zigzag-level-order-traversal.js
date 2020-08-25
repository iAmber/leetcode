/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const res = [], arr = [root];
  let depth = 0
  while(arr.length) {
    depth++
    const tempArr = []
    const len = arr.length;
    for(let i = 0; i < len; i++) {
      const cur = arr.shift()
      if (depth % 2 === 0) {
        tempArr.unshift(cur.val)
      } else {
        tempArr.push(cur.val)
      }
      if (cur.left) {
        arr.push(cur.left)
      }
      if (cur.right) {
        arr.push(cur.right)
      }
    }
    res.push(tempArr)
  }

  return res
};