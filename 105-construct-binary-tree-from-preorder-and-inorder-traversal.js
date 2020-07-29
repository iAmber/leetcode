/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  const l = preorder.length
  if (!l) {
    return null
  }
  const root = preorder[0]
  const res = new TreeNode(root)
  const rootIndex = inorder.indexOf(root)

  const preLeft = preorder.slice(1, rootIndex + 1)
  const preRight = preorder.slice(rootIndex + 1, l)

  const inLeft = inorder.slice(0, rootIndex)
  const inRight = inorder.slice(rootIndex + 1, l)

  res.left = buildTree(preLeft, inLeft)
  res.right = buildTree(preRight, inRight)
  return res
};

const buildTree = (preorder, inorder) => {
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, map)
}

function helper(preorder, p_start, p_end, inorder, i_start, i_end, map) {
  if (p_start > p_end) return null // preorder为空
  let rootVal = preorder[p_start] // 根节点的值
  let root = new TreeNode(rootVal) // 根节点
  let mid = map.get(rootVal) // 根节点在inorder的位置
  let leftNum = mid - i_start // 左子树的节点数

  root.left = helper(preorder, p_start + 1, p_start + leftNum, inorder, i_start, mid - 1, map)
  root.right = helper(preorder, p_start + leftNum + 1, p_end, inorder, mid + 1, i_end, map)
  return root
}



// 输入二叉树的先序遍历和中序遍历，输出后序遍历
var showTree = function (preorder, inorder) {
  const len = preorder.length;
  if (len <= 1) {
      return preorder;
  }

  const root = preorder[0]; //先序第一个为根节点
  const rootIndex = inorder.indexOf(root); //根节点在中序中的位置，左边为中序排列的左子节点，右边为中序排列的右子节点

  const inLeft = inorder.slice(0, rootIndex);
  const inRight = inorder.slice(rootIndex + 1, len);

  const preLeft = preorder.slice(1, rootIndex + 1); //先序的左子节点
  const preRight = preorder.slice(rootIndex + 1, len); //先序的右子节点

  return showTree(preLeft, inLeft).concat(showTree(preRight, inRight), root);
};

showTree([1, 2, 3], [2, 1, 3]);
showTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]);