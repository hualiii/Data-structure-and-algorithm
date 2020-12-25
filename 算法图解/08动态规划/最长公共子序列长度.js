let word1 = 'fish'
let word2 = 'fosh'

function getMaxSubStringSize(word1, word2) {
    // dp矩阵
    let fn = []
    for (let i = 0; i < word1.length + 1; i++) {
        fn[i] = []
        for (let j = 0; j < word2.length + 1; j++) {
            if (i == 0 || j == 0) {
                fn[i][j] = 0
            }
        }
    }
    // dp运算
    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length + 1; j++) {
            if (word1[i] == word2[j]) {
                fn[i][j] = fn[i-1][j-1] + 1
            }else {
                fn[i][j] = Math.max(fn[i-1][j],fn[i][j-1])
            }
        }
    }
    return fn[word1.length][word2.length]
}

console.log(getMaxSubStringSize(word1, word2))