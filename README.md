
一起来刷 LeetCode :D

二叉树：大多使用递归的方式左右两个元素向下递归

1.1 计算二叉树最大深度
```javascript
var maxDepth = function (root) {
    if (root == null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};