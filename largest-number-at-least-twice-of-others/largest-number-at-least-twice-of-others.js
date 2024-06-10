/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
     let max = 0;
     let index = -1;
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] >= max) {
             index = nums[i] >= 2 * max ? i : -1;
             max = nums[i];
         } else if (max < 2 * nums[i]) {
                index = -1;
         }
     }

     return index;
};