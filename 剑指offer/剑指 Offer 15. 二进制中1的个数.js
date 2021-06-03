// link:https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0
    let str = n.toString(2)
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "1") {
            count++
        }
    }
    return count
};