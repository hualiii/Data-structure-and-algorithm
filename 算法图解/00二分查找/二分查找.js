// 封装一个基本的二分查找
function binary_search(order_arr, target) {
    let low = 0, high = order_arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (order_arr[mid] === target) {
            return mid
        } else if (order_arr[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return null
}
let test_arr = [1,5,6,8,11,12,17,22,33,66,88,102]
console.log(binary_search(test_arr,55))