// 计算数组的和

// 常规方法 循环
function sumArr(arr) {
    let sum = 0
    for (const arrItem of arr) {
        sum += arrItem
    }
    return sum
}

console.log(sumArr([1, 2, 3, 4, 5]))

// 分而治之 递归
function sumArr2(arr) {
    if (arr.length == 1) {
        return arr[0]
    } else {
        return arr[0] + sumArr2(arr.slice(1))
    }
}

console.log(sumArr2([1, 2, 3, 4, 5, 6]))