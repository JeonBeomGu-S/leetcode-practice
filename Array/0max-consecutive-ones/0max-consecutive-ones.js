/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    if (nums.indexOf(1) === -1)
        return 0;

    if (nums.length === 1)
        return 1;
    
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 1 && nums[i + 1] === 1)
            count++;
        else
            count = 0;
        
        if (count > max)
            max = count;
    }
    
    return max + 1;
};