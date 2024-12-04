/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expectedSum = (nums.length * (nums.length + 1)) / 2;
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    
    return expectedSum - sum;
};