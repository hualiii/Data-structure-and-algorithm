// link:https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    let obj = {}
    for (const item of s) {
        if (obj[item] == null) {
            obj[item] = 0
        }
        obj[item]++
    }
    for (const item of s) {
        if (obj[item] == 1) {
            return item
        }
    }
    return " "
};