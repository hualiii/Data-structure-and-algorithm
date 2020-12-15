// 使用递归打印1-i
function print(i) {
    if (i==0){
        return
    }else {
        print(i-1)
    }
    console.log(i)
}
print(5)