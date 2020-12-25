/**
 * author:QHL
 * 对象数组 去除Uid2重复 和按 LastInTime/LastOutTime排序
 **/
console.log(histories.length)

function getUnique(array) {
    let obj = {}
    array = array.reduce((init, current) => {
        obj[current.Uid2] ? "" : obj[current.Uid2] = true && init.push(current)
        return init
    }, [])
    return array
}

histories = getUnique(histories)
console.log(histories.length)

histories.sort((n1, n2) => {
    return n2.LastInTime - n1.LastInTime
})
console.log(histories)