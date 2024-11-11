/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true;
    let s = 1;
    while (s <= n) {
        s *= 2;
        if (s == n) return true;
    }
    return false;
};