// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。

// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

var res, path
function FindPath(root, expectNumber)
{
    res = []
    if (root == null) return []
    path = []
    finder(root, expectNumber)
    return path
    // write code here
}

function finder(current, expectNumber) {
    res.push(current.val);
    if (current.val === expectNumber && current.left === null && current.right === null) {
        path = [...path, [...res]]
    } else {
        if(current.left != null) finder(current.left,expectNumber - current.val);
        if(current.right != null) finder(current.right,expectNumber - current.val);
    }
    res.pop()
}