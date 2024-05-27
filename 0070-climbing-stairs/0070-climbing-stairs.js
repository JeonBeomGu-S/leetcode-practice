/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
    
    let result = 0;
    let num1 = 1;
    let num2 = 2;
    if (n === 1 || n === 2)
        return n;
    else {
        for (let i = 2; i < n; i++) {
            result = num1 + num2;
            num1 = num2;
            num2 = result;
        }
        return result;
    }
}