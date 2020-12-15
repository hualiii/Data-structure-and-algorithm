function findSmallest(arr) {
    let smallest = arr[0], smallest_index = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallest_index = i
        }
    }
    return smallest_index
}

function selectionSort(arr) {
    let arrSort = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let smallest = findSmallest(arr)
        arrSort.push(arr.splice(smallest, 1)[0])
    }
    return arrSort
}

console.log(selectionSort([5, 9, 8, 7, 45, 56, 58, 41]))