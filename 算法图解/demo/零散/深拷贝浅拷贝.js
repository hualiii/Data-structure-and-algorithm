/**
 *浅拷贝,创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
 **/

// 方法一:Object.assign(),Object.assign(target, ...sources)

let obj = {}
let obj2 = {
    name:'qhl',
    age:18,
    tab:[1,2,3,4,5,6,7,8]
}
Object.assign(obj,obj2)
obj.age= 20
obj.tab = [1,2]
console.log(obj)