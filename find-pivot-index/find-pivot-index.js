/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = [];
    let sumRight = [];
    let result = -1;

    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = 0;
        for (let j = 0; j < i; j++) {
            left += nums[j];
        }
        for (let j = i + 1; j < nums.length; j++) {
            right += nums[j];
        }
        sumLeft.push(left);
        sumRight.push(right);
    }

    for (let i = 0; i < sumLeft.length; i++) {
        if (sumLeft[i] === sumRight[i]) {
            result = i;
            break;
        }
    }
    return result;
};