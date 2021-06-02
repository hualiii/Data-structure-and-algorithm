// link:https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 0 || n == 1)
        return n;

    let a = 1, b = 0;
    for (let i = 1; i < n; i++) {
        a = a + b;
        b = a - b;
        a %= 1000000007;
    }
    return a;
};