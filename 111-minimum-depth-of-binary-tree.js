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
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null) return 0
  if(root.left === null) return minDepth(root.right) + 1;
  if(root.right === null) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

var minDepth = function(root) {
  if (root === null) return 0
  let minDeep = 0;
  let queue = [root];
  while(queue.length > 0) {
    const length = queue.length;
    minDeep++;
    for(let i = 0; i < length; i++) {
      const temp = queue.shift();
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
      if (!temp.left && !temp.right) {
        return minDeep
      }
    }
  }
  return minDeep
};