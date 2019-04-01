/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

 * 示例:

 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
**/

// solution1:
var twoSum = function(nums, target) {
	//  Map 对象保存键值对
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        if (map.has(target - nums[i])){
        	// get返回某个 Map 对象中的一个指定元素。
            return [ map.get(target - nums[i]), i ]
        }
        // Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 
        // Set中的元素只会出现一次，即 Set 中的元素是唯一的。
        map.set(nums[i], i)
    }
};

// solution2:
var twoSum = function (numbers, target) {
    let map = {};
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i];
        if (map[target - n] !== undefined) {
            return [map[target - n], i];
        } else {
            map[n] = i;
        }
    }
}; 

// solution3: 
var twoSum = function(nums, target) {
	var tempArr = [];
	for (var i = 0; i < nums.length; i++) {
		var temp = target - nums[i];
		var index = tempArr.lastIndexOf(temp);
		console.log('i' + i)
		console.log('index' + index)
		if (index !== -1) {
			return [index, i];
		}
		tempArr.push(nums[i]);
		console.log('tempArr' + tempArr);

	}
	return null;
}
// QA: 如果不止对应一种答案呢？