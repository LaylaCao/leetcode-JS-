/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
*/

// solution1:
var getMedian = function(arr1,start1,len1,arr2,start2,len2,k){
/*
这里的k就相对于是每次递归要寻找的第k小值，比如第一次开始，就相对于是寻找第parseInt(size / 2 + 1)小值或者第parseInt(size / 2)小值。
每次递归都会根据二分时重新确定的arr1和arr2的区间和k的值。start1和start2之前的元素都被排除
其中k = k - 此次递归中舍弃的那段里面元素都小于中位数的区间的长度
*/
    if(len1 - start1 > len2 -start2)
        //这样让后续的递归中保证arr1是较短的那个，这样可以省去一些重复的判断
        return getMedian(arr2, start2, len2, arr1, start1, len1, k);
    if(len1 - start1 == 0)
        //表明arr1中可能存在中位数的区间长度为0，即此次递归中的第k小值只可能存在arr2中，arr2有序，所以就是arr2[k - 1]
        return arr2[k - 1];
    if(k == 1)
        //经过上面的if判断，此时中位数可能存在A或B中，不断递归k值不断缩小。
        //此次递归要求第1小值，那就直接把arr1和arr2的第一个元素比较一下，返回较小的那个。
        return arr1[start1] > arr2[start2] ? arr2[start2] : arr1[start1]; 
    var p1 = start1 + (len1 - start1 < parseInt(k / 2) ? len1 - start1 : parseInt(k / 2)); //arr1中位数的位置，因为arr1是较短的那个数组，所以需要加个判断
    var p2 = start2 + k - p1 + start1;//arr2中位数的位置
    if(arr1[p1 - 1] < arr2[p2 - 1])//因为数组元素index从0开始，所以减一，这里if、if else和else对应的三种情况就是分析中的主要思想
        return getMedian(arr1,  p1, len1, arr2, start2, len2, k - p1 + start1);
        else if(arr1[p1 - 1] > arr2[p2 -1])
            return getMedian(arr1, start1, len1, arr2, p2, len2, k - p2 + start2);
        else
            return arr1[p1 - 1];
}

var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var size = len1 + len2;
    if(size % 2 == 1)
        //如果A和B长度之和为奇数，则中位数只有一个
        return getMedian(nums1, 0, len1, nums2, 0, len2, parseInt(size / 2 + 1));
    else
        //如果A和B长度之和为偶数，则中位数为最中间两数的平均值
        return (getMedian(nums1, 0, len1, nums2, 0, len2, parseInt(size / 2)) + getMedian(nums1, 0, len1, nums2, 0, len2, parseInt(size / 2 + 1))) /2;
};



// solution2:
function kth(arr1, s1, n1, arr2, s2, n2, k) {
    console.log(arr1, s1, n1, arr2, s2, n2, k);
    console.log('-----------');
    if (k < 1 || k > n1 + n2) return -1;

    if (n1 > n2) {
        return kth(arr2, s2, n2, arr1, s1, n1, k);
    }

    if (n1 === 0) {
        return arr2[s2 + k - 1];
    }

    if (k === 1) {
        return arr1[s1] < arr2[s2] ? arr1[s1] : arr2[s2];
    }

    var newK = k >> 1;

    if (n1 < newK) {
        newK = n1;
    }

    if (arr1[s1 + newK - 1] < arr2[s2 + newK - 1]) {
        return kth(arr1, s1 + newK, n1 - newK, arr2, s2, n2, k - newK);
    } else {
        return kth(arr1, s1, n1, arr2, s2 + newK, n2 - newK, k - newK);
    }

}

var findMedianSortedArrays = function (nums1, nums2) {

    var n1 = nums1.length;
    var n2 = nums2.length;

    var mid = Math.floor((n1 + n2) / 2);
    if ((n1 + n2) % 2 === 0) {
        return (kth(nums1, 0, n1, nums2, 0, n2, mid) + kth(nums1, 0, n1, nums2, 0, n2, mid + 1)) / 2;
    } else {
        return kth(nums1, 0, n1, nums2, 0, n2, mid + 1);
    }
};

console.log(findMedianSortedArrays([1, 3, 4], [2, 5]));
console.log(findMedianSortedArrays([1, 3, 4], [2, 5, 6]));

