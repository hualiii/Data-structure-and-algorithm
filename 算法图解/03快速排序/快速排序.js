// 快排 分而治之
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let flag = arr[0]
    let low = arr.slice(1).filter(el => el <= flag)
    let high = arr.slice(1).filter(el => el > flag)
    return quickSort(low).concat(flag, quickSort(high))
}

console.log(quickSort([11, 2, 3, 44, 33, 53, 23, 11, 3, 4, 5, 5, 5]))