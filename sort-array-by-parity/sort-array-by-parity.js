/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let readPointer = 0;
    let writePointer = 0;

    for (readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] % 2 === 0) {
            let temp = nums[writePointer]
            nums[writePointer] = nums[readPointer];
            nums[readPointer] = temp;
            writePointer++;
        }
    }

    return nums;
};