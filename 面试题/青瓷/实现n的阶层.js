// 递归实现
function n(num) {
    if (num == 0) return 1;
    else return num * n(num - 1);
}

console.log(n(5)); // 相当于1*2*3*4*5

// 尾递归实现
// 尾递归的概念就是返回值不是一个表达式，而是函数自身
// 编译器会对尾递归进行优化，优化后的代码会比非尾递归的代码快很多
function wn(num, a = 1) {
    if (num == 0) return a;
    else return wn(num - 1, a * num);
}

console.log(n(255)); // 相当于5*4*3*2*1


