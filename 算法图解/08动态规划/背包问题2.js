/**
 * 假设你要去野营。你有一个容量为6磅的背包，需要决定该携带下面的哪些东西。其中每样东西都有相应的价值，价值越大意味着越重要：
 * 水（重3磅，价值10）；
 * 书（重1磅，价值3） ;
 * 食物（重2磅，价值9）；
 * 夹克（重2磅，价值5）；
 * 相机（重1磅，价值6）。
 * 请问携带哪些东西时价值最高？
 **/
let goods = [
    {
        name: '水',
        weight: 3,
        price: 10
    }, {
        name: '书',
        weight: 1,
        price: 3
    }, {
        name: '食物',
        weight: 2,
        price: 9
    }, {
        name: '夹克',
        weight: 2,
        price: 5
    }, {
        name: '相机',
        weight: 1,
        price: 6
    }
]
let volume = 6

function getMaxPrice(goodsData, volume) {
    let fn = []
    for (let i = 0; i < goodsData.length; i++) {
        fn[i] = []
    }
    for (let i = 0; i < goodsData.length; i++) {
        for (let j = 0; j <= volume; j++) {
            fn[i][j] = {
                price: undefined,
                names: []
            }
            if (i === 0) {
                fn[i][j].price = goodsData[i].weight <= j ? goodsData[i].price : 0
                // fn[i][j].names.push(goodsData[i].weight <= j ? goodsData[i].name : null)
                if (goodsData[i].weight <= j){
                    fn[i][j].names.push(goodsData[i].name)
                }
            } else {
                if (goodsData[i].weight <= j) {
                    // fn[i][j].price = Math.max(fn[i - 1][j].price, fn[i - 1][j - goodsData[i].weight].price + goodsData[i].price)
                    if (fn[i - 1][j].price > fn[i - 1][j - goodsData[i].weight].price + goodsData[i].price) {
                        fn[i][j].price = fn[i - 1][j].price
                        fn[i][j].names = fn[i - 1][j].names
                    }else {
                        fn[i][j].price = fn[i - 1][j - goodsData[i].weight].price + goodsData[i].price
                        fn[i][j].names = [...fn[i - 1][j - goodsData[i].weight].names,goodsData[i].name]
                    }
                } else {
                    fn[i][j].price = fn[i - 1][j].price
                    fn[i][j].names = fn[i - 1][j].names
                }
            }
        }
    }
    return fn[goodsData.length-1][volume].names
}

console.log(getMaxPrice(goods, volume))