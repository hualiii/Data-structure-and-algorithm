// link:https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            newStr += "%20"
        } else {
            newStr += s[i]
        }
    }
    return newStr
};