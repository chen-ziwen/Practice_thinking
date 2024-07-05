// 递归求和

const arr = [1, 5, 8, 9, 6, 1, 5];
const arr2 = arr.slice();
// 普通递归
function sum(a) {
    if (a.length == 0) {
        return 0;
    }
    return a.shift() + sum(a);
}

console.log(sum(arr));
// 使用尾递归求和
function wsum(a, s = 0) {
    if (a.length == 0) {
        return s;
    }
    return wsum(a, s + a.shift())
}

console.log(wsum(arr2));