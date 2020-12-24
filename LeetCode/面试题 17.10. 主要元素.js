// https://leetcode-cn.com/problems/find-majority-element-lcci/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(let i=0;i<nums.length;i++){
        let count=0
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++
            }
        }
        if(count>=Math.ceil(nums.length/2)){
            return nums[i]
        }
    }
    return -1
};

console.log(majorityElement([3,2,3]))