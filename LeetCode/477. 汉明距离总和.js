/**
 * @param {number[]} nums
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
var totalHammingDistance = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            count += hammingDistance(nums[i], nums[j])
        }
    }
    return count
};