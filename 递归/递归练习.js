// 题目： 计算数组内前n个元素的乘积

let arr = [10, 2, 3, 4];
// 循环遍历
function fcount(arr, n) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        num = arr[i] * num;
    }
    return num;
}

// 递归写法
function dcount(arr, n) {
    if (n <= 0) {
        return 1;
    };
    return dcount(arr, n - 1) * arr[n - 1]; // 不断的拿出一位
}

// console.log(fcount(arr, 4));
console.log(dcount(arr, 4));

// 写一个递归函数，sum(arr, n)，返回递归调用数组 arr 从前 n 个元素和。
const sumcount = [2, 3, 5, 8, 10, 12]
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return sum(arr, n - 1) + arr[n - 1];
}
console.log(sum(sumcount, sumcount.length));