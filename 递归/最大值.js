// 递归求最大值


// 普通递归
const arr = [-5, -8, -20, -58, -98, -141, -1, -3, -45];
const arr1 = arr.slice();
function max(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return Math.max(arr[0], max(arr.slice(1)));
}

console.log(max(arr));

// 尾递归
function wmax(arr, max = arr[0]) {
    if (arr.length === 0) {
        return max;
    }
    return wmax(arr.slice(1), Math.max(arr[0], max))
}
console.log(wmax(arr1));