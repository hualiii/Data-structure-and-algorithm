// link: https://leetcode-cn.com/problems/hamming-distance/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let count = 0
    if (x === y) {
        return 0
    }
    while (x != 0 || y != 0) {
        if (x % 2 != y % 2) {
            count++
        }
        x = Math.floor(x / 2)
        y = Math.floor(y / 2)
    }
    return count
};