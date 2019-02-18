
一起来刷 LeetCode :D

1.二叉树：大多使用递归的方式左右两个元素向下递归

1.1 计算二叉树最大深度
```javascript
var maxDepth = function(root) {
	if (root == null) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

1.2 将二叉树以二维数组形式表现
```javascript
var levelOrder = function(root) {
	let ans = [];
	helper(root, ans, 0);
	return ans;
};

function helper(node, ans, i) {
	if (node == nuull) return;
	if (i == ans.length) ans.push([]);
	ans[i].push(node.val);

	helper(node.left, ans, i + 1);
	helper(node.right, ans, i + 1);
}
```
// 都是通过递归方式逐层向下查找二叉树数据

2.可能性问题：一般是告诉一组数据，求出可能性，最小值或最大值

2.1给定几种面额的硬币和一个总额，使用最少的硬币凑成这个总额。
```javascript
var coinChange = function(coins, amount) {
	let max = amount + 1;
	let dp = new Array(amount + 1);
	console.log('dp' + dp.length, 'max' + max);
	dp.fill(max);
	console.log(dp);
	dp[0] = 0;
	console.log(dp[0])
	console.log(dp[1])
	for (let i = 1; i < max; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] <= i) {
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
			}
		}
	}
	return dp[amount] > amount ? -1 : dp[amount];
};
// coins = [1,2,5,10,20,50,100],amount = 38
// console.log(coinChange(coins,amount)) -> 5
```
使用了DP,将从0到目标额度所需的最小硬币数都列出来。

2.2求出从矩阵左上角走到右下角，且只能向右向下移动，一共有多少种可能性。
```javascript
var uniquePaths = function (m,n) {
	const pos = new Array(m);
	for (let i = 0; i < m; i++) {
		pos[i] = new Array(n);
	}
	for (let i = 0; i < n; i++) {
		pos[0][i] = 1;
	}
	for (let i = 0; i < m; i++) {
		pos[i][0] = 1;
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			pos[i][j] = pos[i - 1][j] + pos[i][j - 1]
		}
	}
	return pos[m-1][n-1]
}
```
使用dp逐步列出每一格的可能性

2.3获取给定数组连续元素累加最大值
```javascript
var maxSubArray = function(nums) {
	let count = nums[0], maxCount = nums[0];
	for (let i = 1; i < nums.length; i++) {
		count = Math.max(count + nums[i], nums[i])
		maxCount = Math.max(maxCount, count)
	}
	return maxCount
};
```

3.查找：遇到查找某个值会用到的方法:a.排序算法 b.二分查找 c.索引移动
3.1 查找横向和纵向都递增的二维矩阵中的某个值

```javascript
var searchMatrix = function(matrix, target) {
	if (matrix.length == 0) return false;
	let row = 0, col = matrix[0].length - 1
	while(true) {
		if (matrix[row][col] > target && col > 0) {
			col--
		} else if (matrix[row][col] < target && row < matrix.length - 1) {
			row++
		} else if (matrix[row][col] == target) {
			return true
		} else {
			break
		}
	}
	return false
};
```
先将位置定位在右上角，通过改变位置坐标来找到目标值。

4.回文:正着读反着读是一样的
```javascript
var longestPalindrome = function(s) {
	let maxLength = 0, left = 0, right = 0;
	for (let i = 0, i < s.length; i++) {
		let singleCharLength = getPalLenByCenterChar(s, i, i);
		let doubleCharLength = getPalLenByCenterChar(s, i, i + 1);
		let max = Math.max(singleCharLength, doubleCharLength);
		if (max > maxLength) {
			
		}
	}
}
```













































