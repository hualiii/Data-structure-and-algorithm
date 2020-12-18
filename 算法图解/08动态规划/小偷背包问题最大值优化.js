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
    }]

function getMaxPrice(goods, volume) {
    let n = goods.length;
    let fn = new Array(n)
    for (let i = 0; i < n; i++) {
        fn[i] = []
    }
    for (let i = 0; i < goods.length; i++) {
        for (let j = 0; j <= volume; j++) {
            if (i === 0) {
                fn[i][j] = goods[i].weight <= j ? fn[i][j] = goods[i].price : 0
            } else {
                if (goods[i].weight <= j) {
                    fn[i][j] = Math.max(fn[i - 1][j], fn[i - 1][j - goods[i].weight] + goods[i].price)
                } else {
                    fn[i][j] = fn[i - 1][j]
                }
            }
        }
    }
    return fn
}

console.log(getMaxPrice(goods, 4))