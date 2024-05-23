/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    // string to array
    a = a.split('');
    b = b.split('');

    // boolean to decide to sum 1 or not
    let isNext = false;
    // result string array
    let str = [];
    // bigger length
    let length = a.length < b.length ? b.length : a.length;
    // difference between a.length and b.length
    let difference = Math.abs(a.length - b.length);

    // fill the smaller arry with zeros to make same length as the larger array
    for (let i = 0; i < difference; i++) {
        if (a.length < b.length)
            a.unshift(0);
        else
            b.unshift(0);
    }

    // sum
    for (let i = 0; i < length; i++) {
        let temp = Number(a[a.length - i - 1]) + Number(b[b.length - i - 1]);
        if (isNext)
            temp += 1;
        switch(temp) {
            case 0:
            case 1:
                str.unshift(temp); 
                isNext = false;
                break;
            case 2:
                str.unshift(0);
                isNext = true;
                break;
            case 3:
                str.unshift(1);
                isNext = true;
                break;
        }
    }

    // if final isNext is true, add 1 in front of result
    if (isNext) {
        str.unshift(1);
    }

    // return as string
    return str.join('');
};