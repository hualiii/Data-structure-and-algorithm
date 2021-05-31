// link https://leetcode-cn.com/problems/power-of-four/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1) {
        return true
    } else if (n <= 0) {
        return false
    }
    while (n % 4 === 0) {
        if (n / 4 === 1) {
            return true
        } else {
            n = n / 4
        }
    }
    return false
};