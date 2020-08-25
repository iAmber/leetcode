/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  const res = [], arr = [root];
  while(arr.length) {
      const tempArr = []
      const len = arr.length;
      for(let i = 0; i < len; i++) {
      const cur = arr.shift()
      tempArr.push(cur.val)
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