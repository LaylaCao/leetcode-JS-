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
function kth(arr1, s1, n1, arr2, s2, n2, k) {
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
