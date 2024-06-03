/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(Math.pow(nums[i], 2));
    }
    res.sort((a, b) => a - b);

    return res;
};