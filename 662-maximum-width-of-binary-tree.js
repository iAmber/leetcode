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

const widthOfBinaryTree = function(root) {
  const mins = [0]
  let max = 0

  dfs(root, 0, 0)
  return max

  // depth first search
  function dfs(currentNode, depth, position) {
    if (!currentNode) return
    if (depth === mins.length) {
      mins[depth] = position
    }

    const delta = position - mins[depth]
    max = Math.max(max, delta + 1)
    dfs(currentNode.left, depth + 1, delta * 2)
    dfs(currentNode.right, depth + 1, delta * 2 + 1)
  }
}

// const widthOfBinaryTree = function(root) {
//   let maxWidth = 1;
//   let res = {};
//   dfs(root, 0, 0)
//   return maxWidth;

//   function dfs(currentNode, depth, pos) {
//     if (!res[depth]) {
//       res[depth] = [pos]
//     } else {
//       res[depth].push(pos)
//     }

//     const nodeArr = res[depth]
//     const delta = nodeArr[nodeArr.length - 1] - nodeArr[0] + 1;
//     maxWidth = Math.max(delta, maxWidth)
//     if (currentNode.left) {
//       dfs(currentNode.left, depth + 1, pos * 2 + 1)
//     }
//     if (currentNode.right) {
//       dfs(currentNode.right, depth + 1, pos * 2 + 2)
//     }
//   }
// }

const widthOfBinaryTree = function(root) {
  if (!root) return 1
  const mins[0] = 0
  let maxWidth = 1;
  dfs(root, 0,0)
  return maxWidth
  function dfs(currentNode, depth, pos) {
    if (!currentNode) return
  }
}
console.log(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,6,null,7]))