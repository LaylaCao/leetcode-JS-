/**
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 **/

 var longestPalindrome = function (s) {
    let maxLength = 0, left = 0, right = 0
    for (let i = 0; i < s.length; i++) {
        let singleCharLength = getPalLenByCenterChar(s, i, i)
        let doubleCharLength = getPalLenByCenterChar(s, i, i + 1)
        let max = Math.max(singleCharLength, doubleCharLength)
        if (max > maxLength) {
            maxLength = max
            left = i - parseInt((max - 1) / 2)
            right = i + parseInt(max / 2)
        }
    }
    return s.slice(left, right + 1)
};

function getPalLenByCenterChar(s, left, right) {
    // 中间值为两个字符，确保两个字符相等
    if (s[left] != s[right]){
        return right - left // 不相等返回为1个字符串
    }
    while (left > 0 && right < s.length - 1) {
        // 先加减再判断
        left--
        right++
        if (s[left] != s[right]){
            return right - left - 1
        }
    }
    return right - left + 1
}

console.log(longestPalindrome("cbbd"))