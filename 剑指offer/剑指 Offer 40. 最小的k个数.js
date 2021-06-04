// link:https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    arr.sort((n1, n2) => n1 - n2)
    return arr.slice(0, k)
};