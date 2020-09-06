// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2){
  if(!pRoot1 || !pRoot2) return false
  return same(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

function same(root1, root2) {
  // 初始参数都不为空，所以一旦root2为空 则返回true，root1为空，root2不为空，则false
  if(!root2) return true
  if(!root1) return false;
  return root1.val === root2.val && same(root1.left, root2.left) && same(root1.right, root2.right)
}