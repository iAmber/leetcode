// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树

// 平衡树(Balance Tree，BT) 指的是，任意节点的子树的高度差都小于等于1

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot){
    if (!pRoot) return true
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)
    if (Math.abs(left - right) > 1) return false
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}

function TreeDepth(pRoot) {
  if (!pRoot) return 0
  return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
}
