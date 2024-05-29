/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
    if (nums[0] > target)
        return 0;
    if (nums[nums.length - 1] < target)
        return nums.length;

     for (let i = 0; i < nums.length; i++) {
         if (nums[i] >= target) {
             return i;
         }
     }
};