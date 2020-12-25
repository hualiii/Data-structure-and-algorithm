let word1 = 'fish'
let word2 = 'fosh'

function getMaxSubStringSize(word1, word2) {
    // dp矩阵
    let fn = []
    for (let i = 0; i < word1.length; i++) {
        fn[i] = []
    }
    // dp运算
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (i == 0) {
                fn[i][j] = word1[i] == word2[j] ? 1 : 0
            } else {
                if (word1[i] == word2[j]) {
                    fn[i][j] = fn[i - 1][j - 1] + 1
                } else {
                    fn[i][j] = 0
                }
            }
        }
    }
    let newArr = []
    for (let i = 0; i < fn.length; i++) {
        newArr = newArr.concat(fn[i])
    }
    newArr.sort((n1,n2) => n1 - n2)
    return newArr.pop()
}

console.log(getMaxSubStringSize(word1, word2))