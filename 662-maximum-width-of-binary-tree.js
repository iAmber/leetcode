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
var widthOfBinaryTree = function(root) {
  if (root === null) return 1
  let width = 1;
  let queue = [root];
  while(queue.length > 0) {
    const length = queue.length;
    width = Math.max(width, length);
    for(let i = 0; i < length; i++) {
      const temp = queue.shift();
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
  }
  return width
};