/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

// solution1:
var lengthOfLongestSubstring = function(s) {
    var repeatMap = {};
    var longest = 0, start = 0, end = 0;
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (ch in repeatMap) {
            // 发现重复，从重复的位置一直往前删除`repeatMap`
            var pos = repeatMap[ch];
            for (var j = start; j <= pos; j++) {
                delete repeatMap[s[j]];
            }
            
            start = pos + 1;
        }
        
        repeatMap[ch] = i;
        end = i;
        longest = Math.max(end - start + 1, longest);
    }
    
    return longest;
};

// solution2: 
var lengthOfLongestSubstring = function(s) { 
    var len = s.length; 
    var arr=[],num=0,i=0,j=0; 
    for(;j<len;j++){ 
        if(arr.indexOf(s[j])!==-1){ 
            i = arr.lastIndexOf(s[j])+1; 
            arr.splice(0,i); 
        } 
        num = Math.max(num, arr.length+1); 
        arr.push(s[j]); 
    } 
    return num; 
};

// solution3: 
var lengthOfLongestSubstring = function (s) {

    var max = 0;
    var i = 0;
    var j = 0;
    var n = s.length;
    var map = {};

    while (i < n && j < n) {
        if (map[s[j]] === undefined) {
            map[s[j]] = 1;
            j++;
            max = Math.max(max, j - i);
        } else {
            delete map[s[i]];
            i++;
        }

    }

    return max;
};


// QA： 多个数组，选出无重复字符的最长子串的数组（曾经校招滴滴面试过