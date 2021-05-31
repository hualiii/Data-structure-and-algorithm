// link https://leetcode-cn.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true
    } else if (n <= 0) {
        return false
    }
    while (n % 2 === 0) {
        if (n / 2 === 1) {
            return true
        } else {
            n = n / 2
        }
    }
    return false
};
