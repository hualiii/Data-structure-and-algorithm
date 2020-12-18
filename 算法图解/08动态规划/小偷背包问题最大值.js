// 所偷物品的信息
let goods = [
    {
        name: '吉他',
        weight: 1,
        price: 1500
    }, {
        name: '音响',
        weight: 4,
        price: 3000
    }, {
        name: '笔记本',
        weight: 3,
        price: 2000
    },{
        name: 'iphone',
        weight: 1,
        price: 2000
    }]
// dp函数
function getMaxPrice(goods, volume) {
    // dp数组
    let fn = [[]]
    // 第一个物品及背包的价值
    for (let j = 0; j < volume + 1; j++) {
        if (goods[0].weight <= j) {
            fn[0][j] = goods[0].price
        } else {
            fn[0][j] = 0
        }
    }
    // dp计算
    for (let j = 0; j < volume + 1; j++) {
        for (let i = 1; i < goods.length; i++) {
            if (!fn[i]) {
                fn[i] = []
            }
            if (goods[i].weight <= j) {
                fn[i][j] = Math.max(fn[i - 1][j], fn[i - 1][j - (goods[i].weight)] + goods[i].price)
            } else {
                fn[i][j] = fn[i - 1][j]
            }
        }
    }
    return fn
}

console.log(getMaxPrice(goods, 4))