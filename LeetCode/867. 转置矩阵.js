// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let result = new Array(matrix[0].length)
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = new Array(matrix.length)
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            result[j][i] = matrix[i][j]
        }
    }
    console.log(result)
    return result
};
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[10,11,12]]

console.log(transpose(matrix))