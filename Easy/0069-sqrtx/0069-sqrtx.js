/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
    let left = 1;
    let right = x;
    let mid = Math.floor((left + right) / 2);

    while (mid * mid !== x) {
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            right = mid;
            mid = Math.floor((left + right) / 2);
        } else {
            if (x < (mid + 1) * (mid + 1)) 
            return mid;
            else {
                left = mid;
                mid = Math.floor((mid + right) / 2);
            }
        }
    }

    return mid;
};