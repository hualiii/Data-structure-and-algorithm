// link:https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let result = []
    for (let i = 1; i < Math.pow(10, n); i++) {
        result.push(i)
    }
    return result
};