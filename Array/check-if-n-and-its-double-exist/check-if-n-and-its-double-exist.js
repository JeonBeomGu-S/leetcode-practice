var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((arr[i] === 2 * arr[j] || arr[i] === arr[j] / 2) && i != j) {
                return true;
            }
        }
    }
    return false;
};