/**
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
 **/

// solution1:
var convert = function (s, numRows) {
    if (numRows == 1) return s
    let arr = new Array(numRows)
    for (let i = 0; i < numRows; i++) arr[i] = []
    let index = 0, len = s.length, mi = 0, isDown = true
    while (index < len) {
        arr[mi].push(s[index])
        index++

        if (mi >= numRows - 1)
            isDown = false
        else if (mi <= 0)
            isDown = true

        if (isDown) mi++
        else mi--
    }
    let ans = []
    for (let item of arr) {
        ans = ans.concat(item)
    }
    return ans.join("")
};

const s = "AB", numRows = 1

console.log(convert(s, numRows))