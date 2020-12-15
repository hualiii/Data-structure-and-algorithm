function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = array[i]
        let smallest_index = i
        for (let j = i+1; j < array.length; j++) {
            if(array[j]<smallest){
                smallest = array[j]
                smallest_index = j
            }
        }
        let temp = array[i]
        array[i] = smallest
        array[smallest_index] = temp
    }
    return array
}

console.log(selectionSort([5, 9, 8, 7, 45, 56, 58, 41]))