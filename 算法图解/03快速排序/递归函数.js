// 递归函数计算列表所包元素数
function arrCount(arr) {
    if (arr.length == 0) {
        return 0
    } else {
        return 1 + arrCount(arr.splice(1))
    }
}
console.log(arrCount([1, 2, 3, 4, 5, 6, 7, 8]))