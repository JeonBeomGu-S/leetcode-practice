/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length === 1) {
        arr[0] = -1;
        return arr;
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        let max = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > max)
                max = arr[j];
        }
        arr[i] = max;
    }
    arr[arr.length - 1] = -1;

    return arr;
};
