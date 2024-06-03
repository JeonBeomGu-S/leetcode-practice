/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = Math.pow(-2, 31) - 1;
    let max2 = Math.pow(-2, 31) - 1;
    let max3 = Math.pow(-2, 31) - 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max1 || nums[i] === max2 || nums[i] === max3) {
            continue;
        }
        if (nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        }
        else if (nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        }
        else if (nums[i] > max3) {
            max3 = nums[i];
        }
    }

    return max3 === Math.pow(-2, 31) - 1 ? max1 : max3;
};