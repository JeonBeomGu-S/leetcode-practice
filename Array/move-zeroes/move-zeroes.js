/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let readPointer = 0;
    let writePointer = 0;
    
    for (readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }

    for (let i = writePointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};
