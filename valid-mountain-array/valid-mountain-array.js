/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr[0] >= arr[1] || arr.length < 3)
        return false;

    let ret = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1])
            return false;
        if (!ret) {
            if (arr[i] < arr[i + 1])
                continue;
            else
                ret = true;
        }
        else {
            if (arr[i] > arr[i + 1])
                continue;
            else
                return false;
        }
    }    

    return true && ret;
};